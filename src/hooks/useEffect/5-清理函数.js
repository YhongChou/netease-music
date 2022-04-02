import React, { useEffect } from 'react'

const App = () => {
    // 所有的 effect 是在渲染之后才执行的
    useEffect(() => {
        console.log('debug', ' useEffect');

        return () => {
            console.log('debug', 'useEffect-2')
        }
    })

    console.log('debug', 'App')
  return (
    <div>App</div>
  )
}

export default App