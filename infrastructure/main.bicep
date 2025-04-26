targetScope = 'subscription'

@description('Location for all resources')
param location string = 'westeurope'

@description('Name of the resource group')
param resourceGroupName string = 'rg-thestratbook-prod'

@description('Name of the static web app')
param staticWebAppName string = 'swa-thestratbook-prod'

@description('Start date for the budget')
param budgetStartDate string = utcNow('yyyy-MM-01')

@description('End date for the budget')
param budgetEndDate string = '2050-12-31'

@description('Primary custom domain for the Static Web App (without www)')
param primaryDomain string = 'thestratbook.com'

@description('Name of the Key Vault')
param keyVaultName string = 'kv-thestratbook-prod'

@description('Create a resource group')
resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: location
}

@description('Create a static web app')
module swa 'br/public:avm/res/web/static-site:0.3.0' = {
  name: 'client'
  scope: rg
  params: {
    name: staticWebAppName
    location: location
    sku: 'Free'
    appSettings: {
      enableApplicationInsights: false
    }
  }
}

module keyVaultModule './keyVault.bicep' = {
  name: 'keyVaultModule'
  scope: resourceGroup(resourceGroupName)
  params: {
    keyVaultName: keyVaultName
    location: location
  }
}

@description('Add primary domain to Static Web App')
module primaryCustomDomainModule './primaryCustomDomain.bicep' = {
  name: 'primaryCustomDomainModule'
  scope: resourceGroup(resourceGroupName)
  params: {
    staticWebAppName: staticWebAppName
    primaryDomain: primaryDomain
  }
  dependsOn: [
    swa
  ]
}

@description('Add www subdomain to Static Web App')
module wwwPrimaryCustomDomainModule './primaryCustomDomain.bicep' = {
  name: 'wwwPrimaryCustomDomainModule'
  scope: resourceGroup(resourceGroupName)
  params: {
    staticWebAppName: staticWebAppName
    primaryDomain: 'www.${primaryDomain}'
  }
  dependsOn: [
    swa
  ]
}

@description('Create a budget with cost alerts')
module budgetModule './budget.bicep' = {
  name: 'budgetModule'
  scope: rg
  params: {
    resourceGroupName: resourceGroupName
    startDate: budgetStartDate
    endDate: budgetEndDate
    budgetName: '${resourceGroupName}-budget'
    keyVaultName: keyVaultName
  }
}

@description('Output the default hostname')
output endpoint string = swa.outputs.defaultHostname

@description('Output the static web app name')
output staticWebAppName string = swa.outputs.name

@description('Output the resource group name')
output resourceGroupName string = rg.name

@description('Output the primary domain validation token')
output primaryDomainValidationToken string = primaryCustomDomainModule.outputs.validationToken

@description('Output the www primary domain validation token')
output wwwPrimaryDomainValidationToken string = wwwPrimaryCustomDomainModule.outputs.validationToken
