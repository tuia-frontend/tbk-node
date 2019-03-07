'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  // 商品挑选
  router.get('/tbk/item/auto', controller.item.auto)

  // 淘宝客商品查询
  router.get('/tbk/item/get', controller.item.get)
  // 淘宝客商品详情（简版
  router.get('/tbk/item/info', controller.item.info)

  // 阿里妈妈推广券信息查询
  router.get('/tbk/coupon/get', controller.coupon.get)
  // 好券清单API【导购】
  router.get('/tbk/coupon/list', controller.coupon.list)
  // 淘宝客淘口令创建
  router.get('/tbk/coupon/create', controller.coupon.create)

  // 通用物料搜索API（导购）=》 主要通过该接口筛选商品
  router.get('/tbk/material/optional', controller.material.optional)
  // 淘宝客物料下行-导购
  router.get('/tbk/material/optimus', controller.material.optimus)
  router.get('/tbk/material/scoptimus', controller.material.scoptimus)
}
