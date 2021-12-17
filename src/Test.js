import React, { memo, useCallback, useState } from 'react'

const Test = (props) => {
    console.log('子组件', props);
    return (
        <div>
            子组件{props.count}
            {/* {props.count} */}
            <button onClick={props.onClick}>子组件button</button>
        </div>
    )
};
// const Test = memo((props) => {
//     console.log('子组件', props);
//     return (
//         <div>
//             子组件
//             {/* {props.count} */}
//             <button onClick={props.onClick}>子组件button</button>
//         </div>
//     )
// });

const Parent = () => {

    let [count, setCount] = useState(0);
    const [obj, setObj] = useState({name: 'wo', age: 15});

    // 强依赖count 所以也是每次都更新
    // const handleClick = useCallback(() => {
    //     setCount(count + 1)
    // }, [count]);
    // 不写依赖，就像没写useCallback一样，每次都更新
    // const handleClick = useCallback(() => {
    //     // 只执行一次
    //     setCount(count + 1);
    //     // 始终是初始值
    //     console.log('父组件', 'handleClick', count)
    // });
    const handleClick = useCallback(() => {
        // 只执行一次
        setCount(count + 1);
        // 始终是初始值
        console.log('父组件', 'handleClick', count)
    }, []);
    // const handleClick = useCallback(() => {
    //     // 执行多次
    //     setCount(count + 1);
    //     // 获取的是上一次的state
    //     console.log('父组件', 'handleClick', count)
    // }, [count]);

    console.log('父组件')
    return (
        <div>
            父组件
            {/* <Test /> */}
            <Test onClick={handleClick} count={count}/>
            {/* <button onClick={handleClick}>点击</button> */}
            <button onClick={handleClick}>点击{count}</button>
        </div>
    )
}

export default Parent
