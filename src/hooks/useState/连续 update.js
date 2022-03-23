import React, { useState } from 'react';

const App = () => {
    const [ number ,setNumber ] = useState(0)
    // 直接更新
    const handerClick = ()=>{
        setNumber(1)
        setNumber(2)
        setNumber(3)
    }

    // 使用函数更新
    const handerClickWithFn = ()=>{
        setNumber(state=>state+1)
        console.log('debug', '1', number)
        // 获取上次 state = 1
        setNumber(state=>{
            console.log('debug', '2', state)
            return state+1
        })
        // 获取上次 state = 2
        setNumber(state=>{
            console.log('debug', '3', state)
            return state+1
        })
        // 获取上次 state = 3
        setNumber(state=>{
            console.log('debug', '4', state)
            return state+1
        })
    }

    // 虽然连续执行 update，但是只会触发一次 commit
    console.log(number) // 4
    return <div>
        <div>{ number }</div>
        <button onClick={ ()=> handerClick() } >点击</button>
        <button onClick={ ()=> handerClickWithFn() } >点击-函数</button>
    </div>
}

export default App