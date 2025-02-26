import { React, useState, useEffect, useContext} from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { ColorContext } from '../App';

function Header() {
  const [menu, setmenu] = useState(false)
  const [darkMode, setdarkMode] = useContext(ColorContext)
  
  return (
    <>
      <div className={`${(darkMode) ? "bg-gray-800" : "bg-gray-200"} sticky top-0 w-full h-16 flex justify-center z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)]`}>
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
            <Link className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Products</Link>
            <Link className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Categories</Link>
            <Link className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Profile</Link>
            <div className="hidden md:flex items">
              <input className="rounded-lg ps-1 text-md py-1 border border-black" placeholder="Search..." />
              <button onClick={() => setdarkMode(!darkMode)} className={`${(darkMode) ? "bg-white hover:bg-gray-200" : "bg-blue-900 hover:bg-blue-700"} ms-2 rounded-lg p-2 `}>
                {
                  (darkMode) ?
                  <IoSunny className="text-blue-900" /> :
                  <MdOutlineDarkMode className="text-white" />
                }
              </button>
            </div>
            <button onClick={() => setmenu(!menu)} className={`${(menu) ? "hidden" : "block"} md:hidden cursor-pointer`}>
              <RxHamburgerMenu className={`${(darkMode) ? "text-white" : ""}`} />
            </button>
            <button onClick={() => setmenu(!menu)} className={`${(menu) ? "block" : "hidden"} md:hidden cursor-pointer`}>
              <IoMdClose className={`${(darkMode) ? "text-white" : ""}`} />
            </button>
          </div>
        </div>
        <div className={`${(menu) ? "top-16" : "-top-[1000%]"} ${(darkMode) ? "bg-gray-800" : "bg-gray-200"} flex md:hidden flex-col w-1/2 h-[550px] absolute right-0 bg-gray-200 duration-300 px-3 gap-3`}>
            <Link className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Products</Link>
            <Link className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Categories</Link>
            <Link className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Profile</Link>
            <div className="flex items-center">
              <input className="rounded-lg ps-1 w-2/3 text-md py-1 border border-black" placeholder="Search..." />
              <button onClick={() => setdarkMode(!darkMode)} className={`${(darkMode) ? "bg-white hover:bg-gray-200" : "bg-blue-900 hover:bg-blue-700"} ms-2 rounded-lg p-2 `}>
                {
                  (darkMode) ?
                  <IoSunny className="text-blue-900" /> :
                  <MdOutlineDarkMode className="text-white" />
                }
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header