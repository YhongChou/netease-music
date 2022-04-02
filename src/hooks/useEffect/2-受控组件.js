import React, { useState, useEffect } from 'react'
Array.prototype.forEach = (function () {
    const ary = this;
    const [callbackfn, thisArg] = [].slice.call(arguments);
    if (typeof callbackfn !== 'function') {
      throw new TypeError(callbackfn + 'is not a function')
    }
    for (let i = 0; i < ary.length; i++) {
      callbackfn.call(thisArg, ary[i], i, ary);
    }
  })()

  [1,3,4].forEach((item) => {console.log('foreach')});
const Counter = ({ value, onChange })=> {
    const [count, setCount] = useState(0);

    // 要将外部进入的props与内部状态的state，转化为唯一数据源。这样才能没有冲突的控制状态变化。
    // 换句话说，就是要利用props，去修改内部的state。
    useEffect(() => {
      value && setCount(value);
    }, [value]);

    console.log('debug', 'Counter', value)
    return (
        <>
      <div key="a">{count}</div>
      <button key="b" onClick={() => onChange(count + 1)}>
        点击+1
      </button>
      </>
    )
  }

const App = () => {
    const [value, setValue] = useState(0);

    function onChange(count) {
        console.log('debug', 'App-onChange', count)
        setValue(count)
    }

  return (
    <>
        <div>App</div>
        <Counter value={value} onChange={onChange}/>
    </>
  )
}

export default App