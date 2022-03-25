import React, { useState, useEffect } from 'react'
// useState 函数式更新
const App = () => {
    // 1 每次render 都更新
    console.log('debug', '1')
    const [state, setState] = useState(fn());
    const [count, setCount] = useState(0);

    function fn() {
        const test = 1000;
        console.log('debug', 'setState', test);
        return 1000
    }

    // useEffect(() => {
    //     setState(state + 1)
    //     console.log('debug', 'effect', count)
    // }, [state])

    // // 2 fn 只使用一次
    // const [state, setState] = useState(fn);
    // // 3 fn 只使用一次
    // const [state, setState] = useState(() => {
    //     const test = 1000;
    //     console.log('debug', 'setState', test);
    //     return test
    // });
    console.log('debug', '2')
  return (
    <>
        <button onClick={() => {setCount(count + 1)}}>点击：{count}</button>
    </>
  )
}

export default App