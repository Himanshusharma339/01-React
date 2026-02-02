import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(10)
  function aChanging() {
    console.log('a ki value chng hogayi h'); 
  }
  function bChanging() {
    console.log('b ki value chng hogayi h'); 
  }
  
useEffect(function(){
  aChanging()
},[a])
  
useEffect(function(){
  bChanging()
},[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button onClick={()=>{
        setA(a + 1)
      }}>Change A</button>

      <button onClick={()=> {
        setB(b-1)
      }}
      >Change B</button>
    </div>
  )
}

export default App
