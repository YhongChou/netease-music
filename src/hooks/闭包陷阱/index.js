import React, { useEffect, useState, useMemo } from 'react'

const App = () => {

// // 1 认识闭包 App 翻译出的伪代码
//   const CounterModule = (function() {
//     console.log('debug', 'CounterModule')
//     return function Counter(){
//       console.log('debug', 'CounterModule-Counter')
//     }
// })

// const AppModule = (function() {
//     const Counter = CounterModule;x
//     return function App() {
//         return Counter();
//     }
// })()

// console.log('debug', 'AppModule', AppModule);

    // 2 hook 中的闭包
    const [count, setCount] = useState(1)
    const [name, setName] = useState('chechengyi')

    const text = useMemo(()=>{
        return 'ddd'
    }, [])
    console.log('debug', text)
    return (
        <>
        <div>{name}</div>
        <div>{count}</div>
        </>
  )
}

export default App