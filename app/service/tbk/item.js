'use strict'

const Service = require('egg').Service

module.exports = class ItemService extends Service {
  async get(params = {}) {
    const data = {
      fields: 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,user_type,provcity,item_url,seller_id,volume,nick'
    }
    // 查询词
    if (params.q) {
      data.q = params.q
    }
    // 折扣价范围下限，单位：元
    if (params.start_price) {
      data.start_price = params.start_price
    }
    // 折扣价范围上限，单位：元
    if (params.end_price) {
      data.end_price = params.end_price
    }
    // 淘客佣金比率上限，如：1234表示12.34%
    if (params.start_tk_rate) {
      data.start_tk_rate = params.start_tk_rate
    }
    // 淘客佣金比率下限，如：1234表示12.34%
    if (params.end_tk_rate) {
      data.end_tk_rate = params.end_tk_rate
    }
    // 排序_des（降序），排序_asc（升序），
    // 销量（total_sales），淘客佣金比率（tk_rate）， 累计推广量（tk_total_sales），总支出佣金（tk_total_commi）
    if (params.sort) {
      data.sort = params.sort
    }
    // 链接形式：1：PC，2：无线，默认：１
    data.platform = params.platform || 1
    // 第几页，默认：１
    data.page_no = params.page_no || 1
    // 页大小，默认20，1~100
    data.page_size = params.page_size || 20
    const result = await this.app.tbk.fetch('taobao.tbk.item.get', data)
    return result
  }
  async info(params = {}) {
    const data = {}
    // 商品ID串，用,分割，最大40个
    if (params.num_iids) {
      data.num_iids = params.num_iids
    }
    // ip地址，影响邮费获取，如果不传或者传入不准确，邮费无法精准提供
    if (params.ip) {
      data.ip = params.ip
    }
    // 链接形式：1：PC，2：无线，默认：１
    data.platform = params.platform || 1
    const result = await this.app.tbk.fetch('taobao.tbk.item.info.get', data)
    return result
  }
  async uatmFavoritesGet(params = {}) {
    const data = {
      fields: 'favorites_title,favorites_id,type',
      type: -1,
      page_no: 1,
      page_size: 20
    }
    // 默认值-1；选品库类型，1：普通选品组，2：高佣选品组，-1，同时输出所有类型的选品组
    if (params.type) {
      data.type = params.type
    }
    // 第几页，默认：１
    if (params.page_no) {
      data.page_no = params.page_no
    }
    // 页大小，默认20，1~100
    if (params.page_size) {
      data.page_size = params.page_size
    }
    const result = await this.app.tbk.fetch('taobao.tbk.uatm.favorites.get', data)
    return result
  }
}
