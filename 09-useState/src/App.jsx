import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(1)
  
  function Increseval(){
    setNum(num+1)
  }

  function decreaseval(){
    setNum(num-1)
  }

  function jumbNum(){
    setNum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Increseval}>increase</button>
      <button onClick={decreaseval}>decrease</button>
      <button onClick={jumbNum}>Jumb by 5</button>
  
    </div>
  )
}

export default App
