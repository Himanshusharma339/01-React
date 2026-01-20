import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='aman' age={24} img='https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.webp?s=1024x1024&w=is&k=20&c=ZRzdKZTGsNQqzQ4HpvVsrWT1BL9NjKmB76pIteut-xs=' />
      <Card user='kishan' age={23} img='https://media.istockphoto.com/id/493119864/photo/one-red-dice-on-top-of-stacked-five-white-dice.jpg?s=1024x1024&w=is&k=20&c=9i0mUj0Ch9xoQvmTiwsU9eCj9SkfqGTPZAIPOdGg7nc=' />
      <Card user='sharma' age={18} img='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      
    </div>
  )
}

export default App
