import React from 'react'
import { FaReact } from "react-icons/fa"
import { Link } from 'react-router-dom'

function Navbar() {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark container px-sm-0 px-5 text-white d-flex align-items-center justify-content-between">

            <Link className="navbar-brand fs-4 text-white" to="/country">React Country App </Link>

            <div className='d-flex align-items-center gap-2'>
                <FaReact fill='#fff'  size={24}/>
                <span>Best Mode</span>
            </div>

        </nav>
    )
}

export default Navbar