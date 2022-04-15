import React, { useState, useCallback, useMemo } from 'react';
import Button from './button';

const App = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // 只会触发button 1、3 的重新渲染
    const handleClickButton1 = () => {
      setCount1(count1 + 1);
    };

    // 只有点击 button2 的时候才会触发 button2 的更新
    const handleClickButton2 = useCallback(() => {
      setCount2(count2 + 1);
    }, [count2]);

    // useCallback 依赖项为[] [null] [undefined]时，函数都不会重新创建
    // useCallback 依赖项为null, undefined时，不会做缓存，每次都会重新创建函数
    const handleClickButton4 = useCallback(() => {
      setCount2(count2 + 1);
    }, []);

    //useMemo使用 + useCallback，当 useMemo 返回的是函数时,可以使用useCallback
    // const onClick = useMemo(() => {
    //   //这里返回的依然是函数
    //   return () => {
    //     console.log('click')
    //   }
    // }, []);

    //useCallback使用
    const onClick = useCallback(() => {
        console.log('click')
    }, []);

    return (
      <div>
        <div>
          <Button onClickButton={handleClickButton1}>Button1</Button>
        </div>
        <div>
          <Button onClickButton={handleClickButton2}>Button2</Button>
        </div>
        <div>
          <Button
            onClickButton={() => {
              setCount3(count3 + 1);
            }}
          >
            Button3
          </Button>
        </div>
        <div>
          <Button onClickButton={handleClickButton4}>Button4</Button>
        </div>
      </div>
    );
}

export default App