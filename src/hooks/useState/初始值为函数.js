import React, { useState, useEffect } from 'react'
// useState 函数式更新
const App = () => {
    // 1 每次render 都更新
    const [state, setState] = useState(fn());

    function fn() {
        const test = 1000;
        console.log('debug', 'setState', test);
        return 1000
    }

    // // 2 fn 只使用一次
    // const [state, setState] = useState(fn);
    // // 3 fn 只使用一次
    // const [state, setState] = useState(() => {
    //     const test = 1000;
    //     console.log('debug', 'setState', test);
    //     return test
    // });

  return (
      <>
    {state}
    </>
  )
}

export default App