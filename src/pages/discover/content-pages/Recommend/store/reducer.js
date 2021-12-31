import * as actionTypes from './constants';

// 默认state
const defaultState = {
    topBanners: []
}

/**
 * @description: recommand的store
 * @param {*} state
 * @param {*} action
 */
function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
                return {
                  ...state,
                  topBanners: action.topBanners}
        default:
            return state;
    }
}

export default reducer;