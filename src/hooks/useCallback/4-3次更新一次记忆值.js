import React, { useState, useCallback, useRef, memo } from 'react';

// 使用 memo + useCallback，只有传入了 handleChildren 更新了才会渲染
const Child = memo(({handleChildren}) => {
  console.log('debug', 'Child-Componnet');
  return (
    <div onClick={handleChildren}>Child-Componnet</div>
  )
})

// 不使用 memo + useCallback，每次都会更新
// const Child = ({handleChildren}) => {
//   console.log('debug', 'Child-Componnet');
//   return (
//     <div onClick={handleChildren}>Child-Componnet</div>
//   )
// }

const App = () => {
  const clickNumRef = useRef(0);
  const [clickNum, setClickNum] = useState(0);
  const [updateChildNum, setUpdateChildNum] = useState(0);
  function handleChildren (updateNum) {
    console.log('debug', 'handleChildren', updateNum)
  }

  // 在上一次更新操作的时候同步执行 update 函数
  function update() {
      // 1. 直接获取clickNum，获取到的是更新前的值, 每4次更新一次 Child
    // if (clickNum === 3) {
    //   setUpdateChildNum(updateChildNum + 1)
    // }
    // 2. 使用clickNumRef缓存最新的值，获取到的是更新前的值，每3次更新一次 Child
    if (clickNumRef.current % 3 === 0) {
      setUpdateChildNum(updateChildNum + 1)
    }
  }

  const handleChildrenCallback = useCallback(() => {
    handleChildren(updateChildNum)
  }, [updateChildNum])

  const handleParent = () => {
    setClickNum(clickNum + 1);
    clickNumRef.current = clickNum + 1;
    console.log('debug', 'handleParent', clickNum);
    update();
  }

  console.log('debug', 'Parent-component');
  return (
    <>
      <div onClick={handleParent}>Parent: {clickNum}</div>
      <div>Child: {updateChildNum}</div>
      <Child handleChildren={handleChildrenCallback}/>
    </>
  )
}

export default App