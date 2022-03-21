import React, { useState, useEffect } from 'react'
let test = 1;
const App = () => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     // 打印多少呢 依然是0
    //     setInterval(() => {
    //         console.log('debug', 'setInterval', count)
    //     },5000)
    // }, [])

    // useEffect(() => {
    //     // 打印多少呢 依然是0
    //     setInterval(() => {
    //         setCount(count + 1)
    //         console.log('debug', 'setInterval', count)
    //     },5000)
    // useEffect(() => {
    //     // 打印多少呢 每次 count 更新，重新执行 useEffect 回调, 就会重新创建一个定时器，不同定时器打印不同的闭包时的 count 值
    //     setInterval(() => {
    //         // setCount(count + 1)
    //         console.log('debug', 'setInterval', count)
    //     },5000)
    // }, [count])

    function handleAlert() {
        setTimeout(() => {
            alert( + count)
        }, 3000)
    }

    // 使用函数式更新
    function handleClick() {
        setCount((pre) => pre + 1)
    }

    function handleSetInterval() {
        setCount(count + 1)
    }
    console.log('debug', 'render', test ++ )
  return (
      <>
    <button onClick={() => setCount(count + 1)}>点击这里, 直接更新</button>
    <button onClick={handleAlert}>点击这里，使用 setTimeOut 更新, 弹出弹窗</button>
    {count}
    <button onClick={handleClick}>使用函数式更新</button>
    <button onClick={handleSetInterval}>测试SetInterval</button>
    </>
  )
}

export default App