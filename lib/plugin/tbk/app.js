'use strict'

const assert = require('assert')
const ApiClient = require('./lib/api/topClient').TopClient

module.exports = app => {
  app.addSingleton('tbk', createApiClient)
}

function createApiClient(config) {
  assert(config.appkey && config.appsecret)
  // app.coreLogger.info('[aliTopSdk] connecting %s@%s:%s/%s', config.appkey, config.appsecret)
  const tbk = {}
  const apiClient = new ApiClient(config)
  tbk.apiClient = apiClient
  tbk.fetch = async (url, data) => {
    return new Promise(resolve => {
      apiClient.execute(url, data, function(error, response) {
        if (!error) {
          resolve(response)
        } else {
          resolve(error)
        }
      })
    })
  }
  return tbk
}
