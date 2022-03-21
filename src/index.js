import React from 'react';
import ReactDOM from 'react-dom';
import "@/assets/css/reset.css";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Parent from './Test';
// import Ref from './Ref';
// import App from './hooks/useRef';
// import App from './hooks/setTimeOut';
// import App from './hooks/闭包陷阱';
// import App from './hooks/setTimeOut/传入对象型useState';
// import App from './hooks/setTimeOut/使用useRef';
// import App from './hooks/useRef/同步更新效果';
// import App from './hooks/useEffect/控制先后执行顺序';
// import App from './hooks/useEffect/受控组件';
import App from './hooks/useRef/访问dom';

ReactDOM.render(
  <App />,
  // <Parent />,
  // <Ref />,
  // <React.StrictMode>
  // </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
