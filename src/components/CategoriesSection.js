import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../assets/css/style.css"
import { useInView } from 'react-intersection-observer'
import prod from "../assets/images/wrist-watches.jpg"

function CategoriesSection() {
    const [refProd, inViewProd] = useInView({
        threshold: .5,
    });

  return (
    <div id="shit" className='my-10 py-60'>
        <div ref={refProd} className="mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-2/3 gap-16">
            <div className={`${(inViewProd == true) && "show-prod-left"} hidden-prod-left flex flex-col justify-center md:items-end items-start lg:col-span-3`}>
                <h1 className={"montserrat-font text-3xl text-gray-800"}>Check All Categories!</h1>
                <p className="text-white drop-shadow-md md:text-end">
                    Our products combine quality, innovation, and style to meet your needs. We offer a carefully curated selection at competitive prices, ensuring durability and functionality. Shop with confidence, enjoy fast shipping, and experience excellent customer support. Find your perfect product today!
                </p>
                <Link to="/products" className="px-3 py-1 rounded-lg bg-blue-400 mt-5 hover:bg-blue-300 duration-300" ><FaArrowRight className="text-white text-xl" /></Link>
            </div>
            <div className={`${(inViewProd == true) && "show-prod-right"} hidden-prod-right lg:col-span-2 flex items-center`}>
                <img src={prod} className="rounded-xl" />
            </div>
        </div>
    </div>
  )
}

export default CategoriesSection