import React, { useRef } from 'react';

const App = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current && inputRef.current.focus();
    }
    console.log('window.performance.now()', window.performance);

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>点击让 input 获取焦点</button>
    </div>
  )
}

export default App