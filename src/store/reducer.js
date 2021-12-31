/**
 * @description: reducer文件
 * @param {*}
 */
import { combineReducers } from "redux";
import { reducer as recommendReducer} from '../pages/discover/content-pages/Recommend/store';

const reducer = combineReducers({
    recommend: recommendReducer
});

export default reducer;