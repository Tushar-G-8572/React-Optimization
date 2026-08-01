import React ,{ useCallback, useState } from "react"
import Child from "./components/Child"

// App.jsx
const App = () => {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0) // unrelated state

  // Without useCallback, this is a NEW function every render,
  const changeName = useCallback(() => {
    setName("Tushar")
  }, [])

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Unrelated update ({count})</button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Child changeName={changeName} />
    </div>
  )
}

export default App