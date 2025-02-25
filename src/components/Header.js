import React from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

function Header() {
  
  return (
    <>
      <div className="sticky top-0 w-full h-16 flex justify-center z-10 bg-gray-200 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)]">
        <div className="w-2/3 h-full flex">
          <div className="w-1/2 flex items-center">
            <div className="w-16 h-16 bg-gray-400 relative flex justify-center items-center">
              <Link to="/">
                <img src={logo} className="w-11 h-11" />
              </Link>
              <div className="absolute top-full w-10 triangle"> 
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <Link className="mx-3 hover:text-gray-400 hover:underline duration-300">Products</Link>
            <Link className="mx-3 hover:text-gray-400 hover:underline duration-300">Categories</Link>
            <Link className="mx-3 hover:text-gray-400 hover:underline duration-300">Profile</Link>
            <div className="flex items">
              <input className="rounded-lg ps-1 text-md py-1 border border-black" placeholder="Search..." />
              <button className="bg-green-400 ms-2 rounded-lg p-2 hover:bg-green-300"><BsSearch /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header