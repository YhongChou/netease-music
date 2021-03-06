import React, { useState, useRef, useEffect } from 'react'

const App = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    // // 不写依赖列表，或依赖为 undefined/null
    useEffect(() => {
        // 打印出什么呢 可以访问到最新值，但每次渲染都创建了一个定时器
        countRef.current = count;
        const timer = setInterval(() => {
            console.log('debug', countRef.current)
        }, 5000)
    })
    // // 不写依赖列表，或依赖为 undefined/null,相当于模拟了class中的this.state 储存的是最新值
    // 没法保证在任意一个回调函数中读取的countRef.current是不变的
    // useEffect(() => {
    //     // 打印出什么呢 可以访问到最新值，且只有一个 timer
    //     countRef.current = count;
    //     const timer = setInterval(() => {
    //         console.log('debug', countRef.current)
    //     }, 5000)
    //     return() => {
    //         clearInterval(timer)
    //     }
    // })
    // // 依赖为空数组
    // useEffect(() => {
    //     // 打印出什么呢 只执行一次，访问到的是初始值
    //     countRef.current = count;
    //     setInterval(() => {
    //         console.log('debug', countRef.current)
    //     }, 5000)
    // }, [])
    // // 依赖某一个 state
    // useEffect(() => {
    //     // 打印出什么呢 可以访问到最新值, 但有多个 timer
    //     countRef.current = count;
    //      const timer = setInterval(() => {
    //         console.log('debug', countRef.current)
    //     }, 5000)
    // }, [count])

    // // 依赖某一个 state,只有一个 timer
    // useEffect(() => {
    //     // 打印出什么呢 可以访问到最新值, 但有多个 timer
    //     countRef.current = count;
    //      const timer = setInterval(() => {
    //         console.log('debug', countRef.current)
    //     }, 5000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [count])


  return (
    <>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>点击这里</button>
    </>
  )
}

export default App