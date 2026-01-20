import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/Section2/Section2'



const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'blue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1682608388268-d2fe94141e13?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      color:'skyblue',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1762407520758-b8aaca817f92?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'green',
      tag:'UnderGround'
    },
    {
      img:'https://media.istockphoto.com/id/1219401141/photo/woman-practicing-yoga-in-lotus-position-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZizQtvNJhqZ73gA6sRvr99t5w3fWHT0_XXdAkEbjr2Q=',
      intro:'',
      color:'yellow',
      tag:'Enlighten'
    }
  ]
  return (
    <div >
      <Section1 users={users }/>
      <Section2 />
    </div>
  )
}

export default App
