import { React, useContext} from 'react'
import { ColorContext } from '../App'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'

function Footer() {
    const [darkMode, setdarkMode] = useContext(ColorContext)
  return (
    <div className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} w-full h-96 flex justify-center items-center`}>
        <Link to="/" className="w-40 h-40">
            <img src={logo} className="w-full h-full" />
        </Link>
    </div>
  )
}

export default Footer