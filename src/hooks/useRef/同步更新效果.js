import React, { useEffect, useState, useRef } from 'react'

const App = () => {
    const paramRef = useRef({age: 0});
    const [param, setParam] = useState({
        name: '',
        id: 0,
        thumb: false
    });
    function fetchListData() {
        console.log('debug', 'param', param)
        console.log('debug', 'paramRef', paramRef)
    }

    // 不使用 setState 去更新值
    function searchByName(name) {
        param.name = name;
        fetchListData();
    }

    // // 使用 useRef 去更新值
    // function searchByName(name) {
    //     param.name = name;
    // 新增 name 新属性
    //     paramRef.current = {
    //         ...paramRef.current,
    //         name
    //     };
    //     fetchListData();
    // }

    console.log('debug', 'paramRef-2', paramRef)

    return (
        <div>data list</div>,
        <button onClick={() => searchByName('Jone')}>点击选择</button>
    )
}

export default App