'use strict'

const Controller = require('egg').Controller

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      success: true,
      data
    }
  }
  notFound(msg) {
    msg = msg || 'not found'
    this.ctx.throw(404, msg)
  }
  error(data, msg = 'success') {
    this.ctx.body = {
      success: false,
      data,
      msg
    }
  }
  // 返回结果是否成功
  isSuccess(result) {
    return !result.code
  }
  // tbk统一返回接口
  tbkResponse(result) {
    if (this.isSuccess(result)) {
      this.success(result)
    } else {
      this.ctx.body = {
        success: false,
        data: result
      }
    }
  }
  getTbkId(pid, index) {
    return pid.split('_')[index]
  }
  // 根据pid获取adzoneId
  getAdzoneId(pid) {
    return pid.split('_')[3]
  }
  // 根据pid获取siteId
  getSiteId(pid) {
    return pid.split('_')[2]
  }
}
module.exports = BaseController
