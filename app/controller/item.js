'use strict'

const BaseController = require('./base')

function createTpwdInfo(item) {
  let url = ''
  if (item.coupon_share_url) {
    url = 'https:' + item.coupon_share_url
  } else if (item.url) {
    url = 'https:' + item.coupon_share_url
  }
  return {
    text: item.short_title,
    url,
    logo: item.pict_url
  }
}

class ItemController extends BaseController {
  async get() {
    const { ctx, service } = this
    const result = await service.tbk.item.get({
      q: ctx.query.q
    })
    this.tbkResponse(result)
  }
  async info() {
    const { ctx, service } = this
    const result = await service.tbk.item.info({
      num_iids: ctx.query.num_iid
    })
    this.tbkResponse(result)
  }
  async auto() {
    const { ctx: { query }, app, service } = this
    if (!query.q) {
      return this.error(null, '商品关键词必须填写')
    }
    const querys = {
      q: query.q,
      start_tk_rate: query.start_tk_rate,
      end_tk_rate: query.end_tk_rate,
      start_price: query.start_price,
      end_price: query.end_price,
      has_coupon: query.has_coupon,
      include_pay_rate_30: query.include_pay_rate_30,
      sort: 'total_sales_des',
      adzone_id: this.getAdzoneId(app.config.tbk.pids[0]),
      page_no: query.page_no,
      page_size: query.page_size
    }
    const result = await service.tbk.material.dgMaterialOptional(querys)
    if (this.isSuccess(result)) {
      // 店铺销量
      if (query.volume && query.volume > 1) {
        const list = []
        result.result_list.map_data.forEach(ele => {
          if (ele.volume > query.volume) {
            list.push(ele)
          }
        })
        result.result_list.map_data = list
      }
      const { result_list: { map_data } } = result
      for (let index = 0; index < map_data.length; index++) {
        const item = map_data[index]
        const tpwdInfo = await service.tbk.coupon.tpwdCreate(createTpwdInfo(item))
        map_data[index].model = tpwdInfo.data.model
      }
      this.success(map_data)
    } else {
      this.error(result)
    }
  }
}

module.exports = ItemController
