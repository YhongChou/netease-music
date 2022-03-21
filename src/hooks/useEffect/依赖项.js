import React, { useEffect, useState } from 'react'

const App = () => {
    const [count, setCount] = useState;

    // // 不写依赖项或依赖为 undefined/null: 循环更新,
    // useEffect(() => {
    //     setCount(count + 1)
    // })

    // // 依赖为空数组: 只执行一次
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [])

    // 依赖为 useEffect 中用到的 state: 循环更新
    useEffect(() => {
        setCount(count + 1)
    }, [count])
  return (
    <div>App</div>
  )
}

export default App