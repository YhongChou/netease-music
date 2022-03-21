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
//   const App = () => {
//     const prevCountRef = useRef();
//     console.log('debug', '1', prevCountRef);
//     const [text, setText] = useState('我是文本');
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         prevCountRef.current = count;
//         console.log('debug', '2', prevCountRef);
//     })
//     // 获取到的是旧的 count 值
//     const prevCount = prevCountRef.current;
//     console.log('debug', '3', prevCountRef, count);
//     return (
//       <div>
//         <button onClick={() => setCount(count + 1)}>{count}</button>
//         {/* <Child text={text}/> */}
//         <h1>now: {count}</h1>
//         <h1>before: {prevCountRef.current}</h1>
//       </div>
//     )
//   }
const App = () => {
  return (
    <div>index</div>
  )
}


  export default App;