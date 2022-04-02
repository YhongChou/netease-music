import React, { useEffect, useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    // // 不写依赖项或依赖为 undefined/null: 循环更新,
    // useEffect(() => {
    //     setCount(count + 1)
    // })

    // // 依赖为空数组: 只执行一次
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [])

    // // 依赖为 useEffect 中用到的 state: 循环更新
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [count])

    // useEffect 中依赖了 count state，但并没有把依赖项写在依赖数组中（欺骗了 react
    // 初始化时执行一次渲染,执行一次 effect 的内容,创建了一个定时器,获取到的 count 始终是 count 的初值
    // 3s 后执行一次将 count 值变为1，执行一次渲染
    // 之后setCount(count + 1)执行的都是 setCount(1)，触发一次渲染
    // 不会再触发渲染，但定时器一致在setCount(1)
    // 为什么始终是0呢：useEffect 只执行了一次，获取到的 count 也就是 effect 执行时的 count，因此始终是0
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log('debug', 'useEffect', count)
    //         setCount(count + 1)
    //     }, 3000);
    //     // 组件卸载的时候才执行
    //     return () => {
    //         console.log('debug', 'useEffect-1')
    //         clearInterval(timer)}
    // }, [])

    // 不写依赖，但仍能让 react 不需要被告知依赖谁，当前的前的值是多少
    // 且 effect 只需要执行一次，也能获取到 state 的最新值
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         // 这里，每次获取到的仍是0
    //         console.log('debug', 'useEffect', count)
    //         // 只有内部能取到最新的
    //         setCount(count => count + 1)
    //     }, 3000);
    //     // 组件卸载的时候才执行
    //     return () => {
    //         console.log('debug', 'useEffect-1')
    //         clearInterval(timer)}
    // }, [])

    console.log('debug', 'app')
  return (
    <div>count: {count}</div>
  )
}

export default App