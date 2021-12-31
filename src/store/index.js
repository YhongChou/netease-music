import { createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import reducer from './reducer';
// 配置redux调试工具
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore的第二个参数可以加入一些中间件、thunk等
// applyMiddleware合并中间件,这样redux才会生效
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store;