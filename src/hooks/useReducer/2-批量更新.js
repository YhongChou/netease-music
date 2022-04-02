import React, { useEffect, useState, useReducer} from 'react'

/**
 *
 * @returns demo 地址：https://codesandbox.io/s/xzr480k0np?file=/src/index.js:406-554
 */

const App = () => {
    // const [count, setCount] = useState(0);
    // const [step, setStep] = useState(1);

    // // 虽然依赖项写了 step，但其他 step 一直不变，所以 effect 也只执行了一次，只创建了一个定时器
    // useEffect(() => {
    //     // step 始终是1
    //     console.log('debug', 'step-1', step)
    //   const id = setInterval(() => {
    //     console.log('debug', 'step-2', step)
    //     setCount(c => c + step);
    //   }, 3000);
    //   return () => {
    //       // 只有卸载时执行
    //       console.log('debug', 'step-unmount', step)
    //     clearInterval(id);
    //   }
    // }, [step]);

    const initialState = {
        count: 0,
        step: 1,
      };
    const [state, dispatch] = useReducer(reducer, initialState)
    const { count, step } = state;

    // 不使用setCount(c => c + step)，而是用 useReducer 去实现
    useEffect(() => {
        // 只执行1次 useEffect
        console.log('debug', 'step-1', step)
        const id = setInterval(() => {
            // 每隔3s 就执行 dispatch
            dispatch({ type: 'tick' }); // Instead of setCount(c => c + step);
        }, 3000);
        return () => clearInterval(id);
        // 也可以不写依赖，但最好不要欺骗 react，因为里面 useEffect 里面确实依赖了 dispatch
    }, [dispatch])

    function reducer(state, action) {
        const { count, step } = state;
        if (action.type === 'tick') {
          return { count: count + step, step };
        } else if (action.type === 'step') {
          return { count, step: action.step };
        } else {
          throw new Error();
        }
    }

    console.log('debug', 'step-0', step)
    return (
      <>
        {/* 使用 useEffect
        <h1>count: {count}</h1>
        <input value={step} onChange={e => setStep(Number(e.target.value))} /> */}

        {/* 使用 useReducer */}
        <h1>count: {count}</h1>
        <input
            value={step}
            onChange={e => {
                dispatch({
                type: 'step',
                step: Number(e.target.value)
                });}
            }
        />
      </>
    );
}

export default App