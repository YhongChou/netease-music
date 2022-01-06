/**
 * @description: reducer文件
 * @param {*} 合并多个reducer
 */
// import { Map } from "immutable";
import { combineReducers } from "redux-immutable";
// import { combineReducers } from "redux";
import { reducer as recommendReducer} from '../pages/discover/content-pages/Recommend/store';

// combineReducers(obj) 会取key Obeject.key(obj), 此处不使用immutable Map
// 
const reducer = combineReducers({
    recommend: recommendReducer
});

export default reducer;