import React, { useState, useRef, useEffect, useCallback} from 'react'

// 获取上一次state的hook
const usePrevious = (state) => {
    const stateRef = useRef();

    useEffect(() => {
        stateRef.current = state;
    }, [state])

    return stateRef.current
}

// const useCurrent = (state, fn) => {
//     const fnRef = useRef();

//     const
// }

const Child = ({
    onClick
})=> {
    console.log('Child');
    return (
        <div>
            <button onClick={onClick}>child点击</button>
        </div>
    )
};

const Parent = () => {
    const [count, setCount] = useState(0);
    const refUseRef = useRef(count);

    // const hanleClick = ()=> {
    //     setCount(count + 1)
    // }

    // 也是执行两次更新
    // const hanleClick = useCallback(()=> {
    //     setCount(count + 1);
    //     console.log('parent', 'hanleClick', count, refUseRef.current);
    // }, [])

    // 也是执行两次更新
    const hanleClick = useCallback(()=> {
        setCount(count + 1);
        console.log('parent', 'hanleClick', count, refUseRef.current);
    }, [count]);

    // 每次更新都会执行
    useEffect(() => {
        // 获取到最新的count并存储
        refUseRef.current = count
        console.log('useEffect', count);
    }, [count])

    // // 只更新一次
    // useEffect(() => {
    //     refUseRef.current = count
    // }, [])

    // 取到的refUseRef.curren是上一次的
    console.log('parent', 'render', count, refUseRef.current)

    // const preCount = usePrevious(count);
    // console.log('preCount', preCount);

    Object.prototype.map = (callback) => {
        const obj = this;
        const res = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let item = callback(obj[key], key);
                res[key] = item;
            }
        }
        return res;
    }
    const obj = {
        name: 'nihao',
        age: 17
    }

    const res = obj.map(item => `${item} + 'hh'`)

    return (
        <div>
            <div>count{count}</div>
            <div>refUseRef.current {refUseRef.current}</div>
            {/* <div>{preCount}</div> */}
            <button onClick={hanleClick}>点击</button>
            <Child onClick={hanleClick}/>
        </div>
    );
}

export default Parent
