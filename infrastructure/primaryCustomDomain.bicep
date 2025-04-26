@description('Name of the static web app')
param staticWebAppName string

@description('Primary custom domain for the Static Web App (without www)')
param primaryDomain string

resource primaryCustomDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  name: '${staticWebAppName}/${primaryDomain}'
  properties: {
    validationMethod: 'dns-txt-token'
  }
}

@description('Output the primary domain validation token')
output validationToken string = primaryCustomDomain.properties.validationToken
