/**
 * @description: recommend模块的api
 * @param {*}
 */
import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}