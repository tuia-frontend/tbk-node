'use strict'

const BaseController = require('./base')

class MaterialController extends BaseController {
  async optional() {
    const { ctx: { query }, app, service } = this
    const result = await service.tbk.material.dgMaterialOptional({
      q: query.q,
      start_tk_rate: query.start_tk_rate,
      end_tk_rate: query.end_tk_rate,
      start_price: query.start_price,
      end_price: query.end_price,
      has_coupon: query.has_coupon,
      include_pay_rate_30: query.include_pay_rate_30,
      sort: 'total_sales_des',
      adzone_id: this.getAdzoneId(app.config.tbk.pids[0])
    })
    if (this.isSuccess(result)) {
      // 店铺销量
      if (query.volume) {
        const list = []
        result.result_list.map_data.forEach(ele => {
          if (ele.volume > query.volume) {
            list.push(ele)
          }
        })
        result.result_list.map_data = list
      }
      this.success(result)
    } else {
      this.error(result)
    }
  }
  async optimus() {
    const { ctx, service } = this
    const result = await service.tbk.material.dgOptimusMaterial({
      q: ctx.query.q,
      adzone_id: 98416450336,
      platform: 2
    })
    this.tbkResponse(result)
  }
  async scoptimus() {
    const { ctx, service } = this
    const result = await service.tbk.material.scOptimusMaterial({
      q: ctx.query.q,
      adzone_id: 98416450336,
      platform: 2
    })
    this.tbkResponse(result)
  }
}

module.exports = MaterialController
