import React, { useState } from 'react'

const App = () => {
    const [state, setState] = useState({
        a: 1,
        b: 2,
        c: 'hello'
    })
  return (
      <>
    <div>state.a: {state.a || 'no value'}</div>
    <div>state.c: {state.c || 'no value'}</div>
    {/* 只替换属性 c */}
    <button onClick={() => {setState((pre) => ({...pre, c: 'xiaoming'}))}}>点击1</button>
    {/* state 只剩下属性 a */}
    <button onClick={() => {setState({a: 2})}}>点击2</button>
    </>
  )
}

export default App