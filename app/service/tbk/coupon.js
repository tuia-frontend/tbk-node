'use strict'

const Service = require('egg').Service

module.exports = class CouponService extends Service {
  async dgItemCouponGet(params = {}) {
    const data = {
      platform: 1,
      page_no: 1,
      page_size: 20
    }
    // 查询词
    if (params.q) {
      data.q = params.q
    }
    // 推广位mm_xxx_xxx_12345678三段式的第三位
    if (params.adzone_id) {
      data.adzone_id = params.adzone_id
    }
    // 链接形式：1：PC，2：无线，默认：１
    if (params.platform) {
      data.platform = params.platform
    }
    // 第几页，默认：１
    if (params.page_no) {
      data.page_no = params.page_no
    }
    // 页大小，默认20，1~100
    if (params.page_size) {
      data.page_size = params.page_size
    }
    const result = await this.app.tbk.fetch('taobao.tbk.dg.item.coupon.get', data)
    return result
  }
  async get(params = {}) {
    const data = {}
    // 带券ID与商品ID的加密串
    if (params.me) {
      data.me = params.me
    }
    // 商品ID
    if (params.item_id) {
      data.item_id = params.item_id
    }
    // 券ID
    if (params.activity_id) {
      data.activity_id = params.activity_id
    }
    const result = await this.app.tbk.fetch('taobao.tbk.coupon.get', data)
    return result
  }
  async tpwdCreate(params = {}) {
    const data = {}
    // 生成口令的淘宝用户ID
    if (params.user_id) {
      data.user_id = params.user_id
    }
    // 口令弹框内容
    if (params.text) {
      data.text = params.text
    }
    // 口令跳转目标页
    if (params.url) {
      data.url = params.url
    }
    // 口令弹框logoURL
    if (params.logo) {
      data.logo = params.logo
    }
    const result = await this.app.tbk.fetch('taobao.tbk.tpwd.create', data)
    return result
  }
}
