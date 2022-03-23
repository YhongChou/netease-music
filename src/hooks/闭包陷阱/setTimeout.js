import React from 'react';


const App = () => {
    const [ num ,setNumber ] = React.useState(0)
    const handerClick=()=>{
        for(let i=0; i<5;i++ ){
            // 获取到的是当前执行函数执行上下文的 num
            console.log('debug', '1', num)
           setTimeout(() => {
                setNumber(num+1)
                console.log('debug', '2', num)
            }, 1000)
            console.log('debug', '3', num)
        }
    }
    return <button onClick={ handerClick } >{ num }</button>
}

export default App