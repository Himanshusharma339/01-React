import React from 'react'
import { Link, Routes } from 'react-router-dom'

function Navbar() {
    return (

        <div className='nav'>
            <h3>Sheriyans</h3>
            <div>
     <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                <Link to="/product">
                    Product
                </Link>

            </div>
        </div>

    )
}

// export default Navbar

// basic setup 

// nested Routes

// dynamic routed 

// usenavigate 

// 404 page
