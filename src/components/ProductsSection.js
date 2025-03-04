import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import "../assets/css/style.css"
import { useInView } from 'react-intersection-observer'
import prod from "../assets/images/wrist-watches.jpg"

function ProductsSection() {
    const [refProd, inViewProd] = useInView({
        threshold: .5,
    });

  return (
    <div ref={refProd} className="py-60 mx-auto grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 w-2/3 gap-16">
        <div className={`${(inViewProd == true) && "show-prod-left"} hidden-prod-left lg:col-span-2 flex items-center`}>
            <img src={prod} className="rounded-xl" />
        </div>
        <div className={`${(inViewProd == true) && "show-prod-right"} hidden-prod-right flex flex-col justify-center items-start lg:col-span-3`}>
            <h1 className={"montserrat-font text-3xl text-gray-800"}>Check All Products!</h1>
            <p className="text-gray-500 text-start">
                Our products combine quality, innovation, and style to meet your needs. We offer a carefully curated selection at competitive prices, ensuring durability and functionality. Shop with confidence, enjoy fast shipping, and experience excellent customer support. Find your perfect product today!
            </p>
            <Link to="/products" className="px-3 py-1 rounded-lg bg-blue-400 mt-5 hover:bg-blue-300 duration-300" ><FaArrowRight className="text-white text-xl" /></Link>
        </div>
    </div>
  )
}

export default ProductsSection