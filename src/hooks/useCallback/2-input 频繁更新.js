import React, { useRef, useState, useCallback } from 'react';
import Button from './button';

const App = () => {

    const textRef = useRef('');
    const [text, setText] = useState('');
    const [text3, setText3] = useState('');

    // 0 不使用 useCallback
    const onInputChange = (e) => {
        setText(e.target.value);
        console.log('onInputChange-0', e.target.value);
        // ...
    };

    // 1 函数的依赖项设置为输入的值, 会导致 text 的值每变化一次，Button 就会渲染一次 ,跟 0 没啥区别
    const handleSubmit = useCallback(() => {
        console.log('handleSubmit', text);
        // ...
    }, [text]);

    // 2 让 input 的 onChange 使用上 useCallback, 但也会每次值改变都调用这个函数
    const onInputChangeM = useCallback((e) => {
        setText(e.target.value);
        console.log('onInputChangeM', e.target.value);
        // ...
    }, []);

    // 3 配合 useRef 将函数的依赖项设置为 ref, 只有在调用textRef变化时才会渲染 button
    const handleSubmitRef = useCallback(() => {
        console.log('handleSubmitRef', textRef.current);
        // ...
    }, [textRef]);

  return (
    <form>
        {/* 0 不加任何缓存 */}
        <input value={text} onChange={onInputChange}/>
        <Button onClickButton={handleSubmit} />
        {/* 1 使用 e.target.value 作为依赖项 */}
        <input value={text} onChange={(e) => {
                const { value } = e.target;
                console.log('onInputChange-1')
                setText(value)
            }} />
        <Button onClickButton={handleSubmit} />
        {/* 2 让 input 的 onChange 使用上 useCallback */}
        <input value={text} onChange={onInputChangeM}/>
        <Button onClickButton={handleSubmit} />
        {/* 3 使用 ref作依赖项 */}
        <input value={text3} onChange={(e) => {
                const { value } = e.target;
                console.log('onChangeRef', value)
                setText3(value)
                textRef.current = value;
            }} />
        <Button onClickButton={handleSubmitRef} />
    </form>
  )
}

export default App