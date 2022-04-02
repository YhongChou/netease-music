import React, { useState, useRef, useEffect }from 'react';

//react
const Child = (props) => {
    console.log('child update');
    return (
    <div>
      {props.text}
    </div>
    )
  }

// 获取旧的 state
  const App = () => {
    const prevCountRef = useRef();
    console.log('debug', '1', prevCountRef);
    const [text, setText] = useState('我是文本');
    const [count, setCount] = useState(0);

    // 为什么获取到上一个 state，跟 useEffect 是 dom 挂载之后才执行的
    useEffect(() => {
        prevCountRef.current = count;
        console.log('debug', '2', prevCountRef);
    })
    // 获取到的是旧的 count 值
    const prevCount = prevCountRef.current;
    console.log('debug', '3', prevCountRef, count);
    return (
      <div>
        <button onClick={() => {setCount(count + 1)}}>点击改变 count{count}</button>
        {/* 点击并不会触发函数组件的重新执行,因为并没有使用到 dispatcher */}
        <button onClick={() => {prevCountRef.current = count + 1}}>点击改变 ref{count}</button>
        {/* <Child text={text}/> */}
        {/* <h1>now: {count}</h1> */}
        <h1>before: {prevCountRef.current}</h1>
      </div>
    )
  }


  export default App;