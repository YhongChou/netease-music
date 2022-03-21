import React, { useEffect, useState } from 'react'
/**
 *
 * 函数1 执行 5s 后，执行函数2
 */

// 法1, 使用useEffect
const App = () => {
    const [isDone, setDone] = useState(false);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(101);

    useEffect(() => {
        console.log()
        count1 && !count2 && handleCount1();
        count2 && !count1 && handleCount2();
    }, [count1, count2])

    function handleCount1() {
        setCount1(count1 + 1);
        console.log('debug', 'count1', count1);
    }

    function handleCount2() {
        setCount2(count2 + 1)
        console.log('debug', 'count2', count2);
    }

    function handleClick() {
        setCount1(count1 + 1);
        setTimeout(() => {
            setCount2(count2 + 1)
        }, 5000)
    }

  return (
    <div>
        count1:{count1} <br /> count2: {count2}
        <button onClick={handleClick}>点击更新</button>
    </div>
  )
}
// // 法1, 使用定时器
// const App = () => {
//     const [count1, setCount1] = useState(1);
//     const [count2, setCount2] = useState(101);

//     function handleCount1() {
//         setCount1(count1 + 1);
//         console.log('debug', 'count1', count1);
//     }

//     function handleCount2() {
//         setCount2(count2 + 1)
//         console.log('debug', 'count2', count2);
//     }

//     function handleClick() {
//         handleCount1();
//         setTimeout(() => {
//             handleCount2()
//         }, 3000)
//     }

//   return (
//     <div>
//         count1:{count1} <br /> count2: {count2}
//         <button onClick={handleClick}>点击更新</button>
//     </div>
//   )
// }

export default App