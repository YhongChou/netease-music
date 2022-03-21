import React, { useEffect, useState } from 'react'

const Demo1 = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(101);
    const [obj, setObj] = useState({
        name: 'nihao'
    })

    // 虽然也能获取到最新的 num1，但会提示应该写两个依赖
    // const text = useMemo(() => {
    //     return `num1: ${num1} | num2: ${num2}`
    // }, [num2])

    useEffect(() => {
        setInterval(() => {
            console.log('bubug', 'effect-interval', obj)
        }, 5000)
    }, [])

    function handleClick() {
        setNum1(num1 + 1);
        setNum2(num2 + 1);

        // 使用对象型 state，每次更新都能获取到新的值
        setObj((pre) => {
            const obj = {
                ...pre,
                name: 'hello'
            }
            // false
           console.log(obj == pre)
            return obj
        })
        // setObj((prevState)=> {
        //     var nowObj = Object.assign(prevState, {
        //         name: 'hello'
        //     })
        //     // true, 因为 Object.assign 返回的就是传入的第一个对象
        //     console.log(nowObj == prevState)
        //     return nowObj
        //   })
    }
    console.log('debug', 'obj', obj)

    return(
        <>
            {/* <div>{text}</div> */}
            <div>{obj.name}</div>
            <button onClick={handleClick}>点击</button>
        </>
    )
}

const App = () => {
    return (
        <Demo1 />
    )
}

export default App