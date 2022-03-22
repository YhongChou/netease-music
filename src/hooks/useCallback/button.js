// Button.jsx
import React from 'react';

const Button = ({ onClickButton, children }) => {
    console.log('button')
  return (
    <>
      <button onClick={onClickButton}>点击我提交</button>
      <span>{Math.random()}</span>
    </>
  );
};

export default React.memo(Button);
