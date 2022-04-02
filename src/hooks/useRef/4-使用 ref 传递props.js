import React from 'react'

const Child = ({item}) => {
    console.log('debug', 'Child', item)
    return (<div>{item}</div>)
}

const App = () => {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState("")
    React.useEffect(() => {
      setInterval(() => {
        setCount(x => x + 1)
      }, 1000)
    }, [])
    const item = React.useRef({
      text: name,
      done: false,
    }) // 每次访问的item都是同一个item

    console.log('debug', 'App', item)
    return (
      <>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value)
          }}
        />
        <div>counter:{count}</div>
        <Child item={item.current} />
      </>
    )
  }

export default App