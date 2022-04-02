import React, { useEffect, useState, useRef } from 'react'

const App = () => {
    const paramRef = useRef({age: 0});
    const countRef = useRef(null);
    const countRefWithCreate = React.createRef(null);

    const [param, setParam] = useState({
        name: '',
        id: 0,
        thumb: false
    });
    const [count, setCount] = useState(0);
    function fetchListData() {
        console.log('debug', 'param', param)
        console.log('debug', 'paramRef', paramRef)
    }

    // 1. 不使用 setState 去更新值
    function searchByName(name) {
        param.name = name;
        fetchListData();
    }

    // // 2. 使用 useRef 去更新值
    // function searchByName(name) {
    //     param.name = name;
    // 新增 name 新属性
    //     paramRef.current = {
    //         ...paramRef.current,
    //         name
    //     };
    //     fetchListData();
    // }

    // // 3. mount 的时候是0 点击的时候是1 之后不会再更新
    // // 原因: countRef的引用是一致的,countRef.current 只有在 mount 的时候才是 null
    // if (!countRef.current) {
    //     countRef.current = count;
    // }

    // 4. 获取最新的值
    // countRef.current = count;

    // // 5.打印出来的是旧的 count，下一次调用才会更新到页面
    useEffect(() => {
        console.log('debug', 'mount')
        countRef.current = count;
    }, [count])

    // // 6.获取到上上次的 count
    useEffect(() => {
        console.log('debug', 'mount')
        // countRef.current = count;
        return () => {
            console.log('debug', 'unmount')
            countRef.current = count;
        }
    }, [count])

    // 始终是最新的值
    // 原因: 获取最新的值, 因为React.createRef每次渲染都会返回一个新的引用
    if (!countRefWithCreate.current) {
        countRefWithCreate.current = count;
    }

    console.log('debug', 'countRef', countRef)
    console.log('debug', 'countRefWithCreate', countRefWithCreate)

    return (
        <>
            <div>data list</div>
            <button onClick={() => searchByName('Jone')}>点击选择</button>
            <button onClick={() => setCount(count + 1)}>点击增加值</button>
            <div>count: {count}</div>
            <div>ref: {countRef.current}</div>
            <div>createRef: {countRefWithCreate.current}</div>
        </>
    )
}

export default App