'use strict'

const BaseController = require('./base')

class HomeController extends BaseController {
  async index() {
    const { ctx, app } = this
    console.log(this.getAdzoneId(app.config.tbk.pids[0]))
    ctx.body = 'hello egg'
  }
}

module.exports = HomeController
