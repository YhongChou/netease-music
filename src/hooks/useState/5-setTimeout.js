import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    // 显示的是点击 button2 当时 count 的值
    function handleClick() {
        setTimeout(() => {
            console.log('debug', setTimeout, count)
        }, 3000)
    }
  return (
    <div>
        count: {count}
        <button onClick={() => {setCount(count + 1)}}>button1: 增加 count 值</button>
        <button onClick={handleClick}>button2: show alert</button>
    </div>
  )
}

export default App