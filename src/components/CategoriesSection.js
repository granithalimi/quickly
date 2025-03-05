import { React, useContext} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../assets/css/style.css"
import { useInView } from 'react-intersection-observer'
import prod from "../assets/images/wrist-watches.jpg"
import { ColorContext } from '../App'


function CategoriesSection() {
    const [refCategories, inViewCategories] = useInView({
        threshold: .5,
        triggerOnce: true,
    });
    const [darkMode] = useContext(ColorContext)

  return (
    <div id="shit" className='my-10 py-60 overflow-hidden relative'>
        <div ref={refCategories} className="mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-2/3 gap-16">
            <div className={`${(inViewCategories === true) && "show-prod-left"} hidden-prod-left flex flex-col justify-center md:items-end items-start lg:col-span-3`}>
                <h1 className={"montserrat-font text-3xl text-blue-400"}>Check All Categories!</h1>
                <p className={`text-white drop-shadow-md md:text-end`} style={{webKitTextStroke: "3px black"}}>
                    Easily find what you need with our smart filtering options! Browse products by category, price, brand, or features to match your preferences. Our intuitive filters help you narrow down choices quickly, saving time and effort. Shop effortlessly and discover the perfect product with just a few clicks!
                </p>
                <Link to="/products" className="px-3 py-1 rounded-lg bg-blue-400 mt-5 hover:bg-blue-300 duration-300" ><FaArrowRight className="text-white text-xl" /></Link>
            </div>
            <div className={`${(inViewCategories === true) && "show-prod-right"} hidden-prod-right lg:col-span-2 flex items-center`}>
                <img alt={prod} src={prod} className="rounded-xl" />
            </div>
        </div>
        <div className="custom-shape-divider-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className={`${(darkMode === true) ? "fill-gray-700" : "fill-white"}`}></path>
            </svg>
        </div>
        <div className="custom-shape-divider-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={`${(darkMode === true) ? "fill-gray-700" : "fill-white"}`}></path>
            </svg>
        </div>
    </div>
  )
}

export default CategoriesSection