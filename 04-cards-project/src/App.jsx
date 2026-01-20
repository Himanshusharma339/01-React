import React from 'react'
import Card from './card'
import User from './User'

const App = () => {
  const arr = [10,20,30]
  return (
    <div className='parent'>
       {arr.map{function(){
        return <h1>Hey</h1>
       }}};
    </div>
  )
}

export default App
