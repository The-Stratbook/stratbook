@description('Name of the Key Vault')
param keyVaultName string = 'kv-thestratbook-prod'

@description('Location for the Key Vault')
param location string

@description('Create a Key Vault')
resource keyVault 'Microsoft.KeyVault/vaults@2021-06-01-preview' = {
  name: keyVaultName
  location: location
  properties: {
    sku: {
      family: 'A'
      name: 'standard'
    }
    tenantId: subscription().tenantId
    accessPolicies: []
  }
}

@description('Add an empty secret to the Key Vault')
resource budgetContactEmailSecret 'Microsoft.KeyVault/vaults/secrets@2021-06-01-preview' = {
  name: 'BudgetContactEmail'
  parent: keyVault
  properties: {
    value: ''
  }
}
