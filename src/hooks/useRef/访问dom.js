import React, { useRef } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref}>
        {props.children}
    </button>
))

const App = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current && inputRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>点击让 input 获取焦点</button>
    </div>
  )
}

export default App