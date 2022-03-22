import React, { useState, memo, useCallback } from 'react';

const Child = ({info, count}) => {
    console.log('Child')
    return (
        <>
        <div>{info.name}</div>
        <div>count:{count}</div>
        </>
    )
}

const ChildMemo = memo(Child);

function Expensive({ onClick, name }) {
  console.log('Expensive渲染');
  return <div onClick={onClick}>{name}</div>
}

const MemoExpensive = memo(Expensive);

function Cheap({ onClick, name }) {
  console.log('cheap渲染');
  return <div onClick={onClick}>{name}</div>
}

export default function App() {
    const [dataA, setDataA] = useState(0);
    const [dataB, setDataB] = useState(0);
    const [info, setInfo] = useState({
        name: 'nihao',
        age: 0
    })

    // 一 不传入函数给 Child的场景。两种方式都能避免 Child 在其他 state 变化时的无效影响
    // 1.1 Child 的 props 有 Info 和其他 state
    // // 下面两种 更新 state 的方法, Child 都会重新渲染
    // const onClickA = () => {
    //     setDataA(o => o + 1);

    //     // 1
    //     // setInfo((pre) => {
    //     //     const obj = {
    //     //         ...pre,
    //     //         name: 'hello'
    //     //     }
    //     //     // false
    //     //    console.log(obj == pre)
    //     //     return obj
    //     // })

    //     // 2
    //     setInfo((prevState)=> {
    //         var nowObj = Object.assign(prevState, {
    //             name: 'hello'
    //         })
    //         // true, 因为 Object.assign 返回的就是传入的第一个对象
    //         console.log(nowObj == prevState)
    //         return nowObj
    //       })
    // };

    // 1.2 Child 的 props 只有 Info 对象
    const onClickA = () => {
        setDataA(o => o + 1);

        // // 1 Child 会重新渲染
        // setInfo((pre) => {
        //     const obj = {
        //         ...pre,
        //         name: 'hello'
        //     }
        //     // false
        //    console.log(obj == pre)
        //     return obj
        // })

        // 2 使用 memo 包裹Child, 由于info 对象的引用是一致的，Child 不会重新渲染，产生 bug
        setInfo((prevState)=> {
            var nowObj = Object.assign(prevState, {
                name: 'hello'
            })
            // true, 因为 Object.assign 返回的就是传入的第一个对象
            console.log(nowObj == prevState)
            return nowObj
          })
    };



    // 点击Cheap组件不会触发Expensive组件的刷新，只有点击Expensive组件才会触发。
    const onClickB = useCallback(() => {
        setDataB(o => o + 1);
    }, []);


    return <div>
        <Cheap onClick={onClickA} name={`组件Cheap：${dataA}`}/>
        <MemoExpensive onClick={onClickB} name={`组件Expensive：${dataB}`} />
        {/* <ChildMemo info={info}/> */}
        <ChildMemo info={info} count={dataA}/>
    </div>
}
