'use strict'

const BaseController = require('./base')

class CouponController extends BaseController {
  async get() {
    const { ctx, service } = this
    const result = await service.tbk.coupon.get({
      item_id: ctx.query.item_id
    })
    this.tbkResponse(result)
  }
  async list() {
    const { ctx, service } = this
    const result = await service.tbk.coupon.dgItemCouponGet({
      q: ctx.query.q,
      adzone_id: 98416450336,
      platform: 2
    })
    this.tbkResponse(result)
  }
  async create() {
    const { ctx: { query }, service } = this
    const result = await service.tbk.coupon.tpwdCreate({
      text: query.text || '春秋季特价清仓学生连衣裙牛仔卫衣',
      url: query.url || 'https://uland.taobao.com/coupon/edetail?e=J5h8c%2FrrwyYNfLV8niU3RwXoB%2BDaBK5LQS0Flu%2FfbSp4QsdWMikAalrisGmre1Id522H2TxuqpI07i1%2BZExh7Z0hsTS85xG7TE%2FSUx86i6ROIoKVyqhO%2BcyI9m717Yb5IXhfthYLA8UjsR%2FGVhaT%2FsQZxJWsNZCjTVzKfNGtZyNiyoT%2BQ3EQYJpORE%2BcPgnzMXWvr%2Bgbg0sM1L%2FmEra8u1kT%2Burs3qO2&&app_pvid=59590_11.20.255.74_38012_1551945904218&ptl=floorId:2836;app_pvid:59590_11.20.255.74_38012_1551945904218;tpp_pvid:100_11.14.200.237_28786_6621551945904224794&xId=iYfMlwl6Tb8vrEozw1tonlYoWTCHKNyuRn22Zx9PpzmGcXU0kRwYaqIgI4P9N89YNOJZju95BFAka8aZz4eF0s&union_lens=lensId:0b14ff4a_0cab_169572f309d_5fd8',
      logo: query.logo || 'https://img.alicdn.com/bao/uploaded/i3/2200653302315/O1CN01qjYnak1SyJOIxtb8N_!!2200653302315.jpg'
    })
    this.tbkResponse(result)
  }
}

module.exports = CouponController
