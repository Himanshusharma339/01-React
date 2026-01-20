import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(10)

  const btnclicked=()=>{
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1)) // values update by+3 called as batch updating
  }

  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>click</button>
    </div>
  )
}

export default App
