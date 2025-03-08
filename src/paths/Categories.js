import { React, useContext, useEffect, useState } from 'react'
import { ColorContext } from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"
function Categories() {
    const [darkMode] = useContext(ColorContext)
    const [categories, setcategories] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/test')
        .then(data => data.json())
        .then(data => {
            (data.status === "ok") && 
            fetch('https://dummyjson.com/products/categories')
            .then(data => data.json())
            .then(data => setcategories(data))
        })
    }, [categories])
    
  return (
    <div className={`${darkMode && "bg-gray-700"}`}>
        <Header />    
        <div className="min-h-screen my-10">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4">
                {
                    (categories && categories.length) && 
                    categories.map((category, ind) => (
                        <Link to={`/categories/${category.slug}`} key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105 duration-300`}>
                            <div className="w-full h-3/5 p-3">
                                <img src={logo} className="w-full h-full object-contain"  />
                            </div>
                            <div className="w-full h-2/5 p-3">
                                <h1 className={`${(darkMode) ? "text-white" : ""} text-center font-bold`}>{category.name}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Categories