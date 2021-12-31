import * as actionTypes from './constants';
import { getTopBanners } from '@/services/recommend';

const changeToBanners = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeToBanners(res))
    })
  }
}