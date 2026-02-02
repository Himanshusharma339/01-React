import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
     const navigate = useNavigate()
  return (
    <div className='py-3 px-5 bg-cyan-400'>
        <button onClick={()=>{
        navigate('/')

      }}
        className='bg-cyan-600 px-5 py-2 rounded m-2 cursor-pointer hover:bg-green-500 active:scale-95'
      >Go to Home</button>
      <button onClick={()=>{
        navigate(-1)
      }}
        className='bg-green-800 px-5 py-2 rounded m-2 cursor-pointer hover:bg-green-500 active:scale-95'
      >back</button>
      <button onClick={()=>{
        navigate(+1)
      }}
        className='bg-green-900 px-5 py-2 rounded m-2 cursor-pointer hover:bg-green-500 active:scale-95'
      >Next</button>
    </div>
  )
}

export default Navbar2
