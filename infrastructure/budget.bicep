@description('Budget amount in Euros')
param budgetAmount int = 10

@description('Email address for budget alerts')
param budgetContactEmail string = 'thestratbook.com@vanhoutensolutions.nl'

@description('Resource Group to monitor')
param resourceGroupName string

@description('Name of the budget')
param budgetName string = '${resourceGroupName}-budget'

@description('Start date for the budget in yyyy-MM-dd format')
param startDate string = utcNow('yyyy-MM-01')

@description('End date for the budget in yyyy-MM-dd format')
param endDate string = '2050-12-31'

@description('Create a budget with cost alerts')
resource budget 'Microsoft.Consumption/budgets@2023-03-01' = {
  name: budgetName
  properties: {
    category: 'Cost'
    amount: budgetAmount
    timeGrain: 'Monthly'
    timePeriod: {
      startDate: startDate
      endDate: endDate
    }
    notifications: {
      actual_80_Percent: {
        enabled: true
        operator: 'GreaterThanOrEqualTo'
        threshold: 80
        contactEmails: [
          budgetContactEmail
        ]
      }
      actual_100_Percent: {
        enabled: true
        operator: 'GreaterThanOrEqualTo'
        threshold: 100
        contactEmails: [
          budgetContactEmail
        ]
      }
      forecasted_100_Percent: {
        enabled: true
        operator: 'GreaterThanOrEqualTo'
        threshold: 100
        contactEmails: [
          budgetContactEmail
        ]
      }
    }
  }
}

@description('Output the budget name')
output budgetName string = budget.name
