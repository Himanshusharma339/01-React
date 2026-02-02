import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        props.setTheme(props.theme === 'dark' ? 'light' : 'dark')
        
    }
    
  return (
    <div>
        
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar
