import React, { useState } from 'react'

const App = () => {

    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(1)
    }

    // 多次点击，只会执行两次 log
    console.log('debug', '更新次数')
  return <>
  <div>{count}</div>
  <button onClick={onClick}>点击</button>
  </>
}

export default App