import React from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
function Header() {
  
  return (
    <div className="w-full h-16 bg-gray-100 flex justify-center">
        <div className="w-1/3 h-full">

        </div>
        <div className="w-1/3 h-full flex justify-center items-center">
            <Link to="../">
              <img src={logo} className="w-12 h-12" />
            </Link>
        </div>
        <div className="w-1/3 h-full">

        </div>
    </div>
  )
}

export default Header