import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProductsSection() {
  return (
    <div className="flex justify-center my-10">
        <div className="w-2/3 flex">
            <div id="text" className="w-1/2">
                <p className="text-gray-500 font-semibold">
                    Our products are designed with quality, innovation, and customer satisfaction in mind. Whether you're looking for everyday essentials or unique finds, we offer a carefully curated selection to meet your needs. Each item is crafted to ensure durability, functionality, and style, making your shopping experience effortless and enjoyable. We believe in providing value, offering competitive prices without compromising on quality. Browse our collection and discover products that enhance your lifestyle, simplify daily tasks, and bring joy to your routine. With fast shipping and excellent customer support, we make shopping easy and reliable. Find the perfect product for you today!
                </p>
            </div>
            <div id="title" className="w-1/2 flex items-center justify-center">
                <h1 className="montserrat-font text-center text-3xl">
                    Check Our Products!
                </h1>
                <Link to="/products" className="py-1 px-3 bg-indigo-400 rounded-lg text-white hover:bg-indigo-300 duration-300 mx-3">Go to Products</Link>
            </div>
        </div>
    </div>
  )
}

export default ProductsSection