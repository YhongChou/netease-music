import * as actionTypes from './constants';

// 默认state
const defaultState = {
    topBanners: [],
    newAlbums: [],
    rankings: []
}

/**
 * @description: recommand的store
 * @param {*} state
 * @param {*} action
 */
function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            // 合并数据
            // 使用ImmutableJS优化更新state时的性能问题
            return {
                ...state,
                topBanners: action.topBanners}
        default:
            return state;
    }
}

export default reducer;