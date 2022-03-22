import React, { useMemo, useState } from 'react';

const Child = ({info}) => {
    console.log('Child')
    return (
        <div>
            {info}
        </div>
    )
}

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1 )
    }

    // 缓存值
    const memoizedValue = useMemo(() => getState(), []) // {7}

    function getState() {  //{2}

        console.log("getState run"); //{3}

        let temp = 0;
        for (let index = 0; index < 1000; index++) {
        temp += index;
        }

        return temp;
    }

    const computeValue = memoizedValue; //{4}

  return (
    <div>
        <button onClick={handleClick}>点击</button>
        <div>count: {count}</div>
        <Child info={computeValue} />
    </div>
  )
}

export default App