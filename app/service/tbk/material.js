'use strict'

const Service = require('egg').Service

module.exports = class MaterialService extends Service {
  async dgOptimusMaterial(params = {}) {
    const data = {}
    // 推广位mm_xxx_xxx_12345678三段式的最后一段数字
    if (params.adzone_id) {
      data.adzone_id = params.adzone_id
    }
    // 推广位mm_xxx_xxx_12345678三段式的第二位
    if (params.site_id) {
      data.site_id = params.site_id
    }
    // 官方的物料Id(详细物料id见：https://tbk.bbs.taobao.com/detail.html?appId=45301&postId=8576096)
    if (params.material_id) {
      data.material_id = params.material_id
    }
    // 第几页，默认：１
    data.page_no = params.page_no || 1
    // 页大小，默认20，1~100
    data.page_size = params.page_size || 20
    const result = await this.app.tbk.fetch('taobao.tbk.dg.optimus.material', data)
    return result
  }
  async dgMaterialOptional(params = {}) {
    const data = {}
    // 查询词
    if (params.q) {
      data.q = params.q
    }
    // 商品筛选(特定媒体支持)-成交转化是否高于行业均值。True表示大于等于，false或不设置表示不限
    if (params.include_pay_rate_30) {
      data.include_pay_rate_30 = params.include_pay_rate_30
    }
    // 商品筛选-好评率是否高于行业均值。True表示大于等于，false或不设置表示不限
    if (params.include_good_rate) {
      data.include_good_rate = params.include_good_rate
    }
    // 推广位mm_xxx_xxx_12345678三段式的最后一段数字
    if (params.adzone_id) {
      data.adzone_id = params.adzone_id
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
    // ip地址，影响邮费获取，如果不传或者传入不准确，邮费无法精准提供
    if (params.ip) {
      data.ip = params.ip
    }
    // 排序_des（降序），排序_asc（升序），
    // 销量（total_sales），淘客佣金比率（tk_rate）， 累计推广量（tk_total_sales），总支出佣金（tk_total_commi）
    if (params.sort) {
      data.sort = params.sort
    }
    // 优惠券筛选-是否有优惠券。true表示该商品有优惠券，false或不设置表示不限
    if (params.has_coupon) {
      data.has_coupon = params.has_coupon
    }
    // 商品筛选-后台类目ID。用,分割，最大10个，该ID可以通过taobao.itemcats.get接口获取到
    if (params.cat) {
      data.cat = params.cat
    }
    // 链接形式：1：PC，2：无线，默认：１
    data.platform = params.platform || 1
    // 第几页，默认：１
    data.page_no = params.page_no || 1
    // 页大小，默认20，1~100
    data.page_size = params.page_size || 20
    const result = await this.app.tbk.fetch('taobao.tbk.dg.material.optional', data)
    return result
  }
  async scOptimusMaterial(params = {}) {
    const data = {}
    // 推广位mm_xxx_xxx_12345678三段式的第三位
    if (params.adzone_id) {
      data.adzone_id = params.adzone_id
    }
    // 推广位mm_xxx_xxx_12345678三段式的第二位
    if (params.site_id) {
      data.site_id = params.site_id
    }
    // 官方的物料Id(详细物料id见：https://tbk.bbs.taobao.com/detail.html?appId=45301&postId=8576096)
    if (params.material_id) {
      data.material_id = params.material_id
    }
    // 第几页，默认：１
    data.page_no = params.page_no || 1
    // 页大小，默认20，1~100
    data.page_size = params.page_size || 20
    const result = await this.app.tbk.fetch('taobao.tbk.sc.optimus.material', data)
    return result
  }
}
