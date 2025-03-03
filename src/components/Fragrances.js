import { React, useState, useEffect, useContext} from 'react'
import { ColorContext } from '../App'
import '../assets/css/style.css'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

function Fragrances() {
    const [fragrances, setfragrances] = useState([])
    const [darkMode, setdarkMode] = useContext(ColorContext)

    const [refFragrances, inViewFragrances] = useInView({
        threshold: .5,
        triggerOnce: true,
    });

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/fragrances?limit=4')
        .then(res => res.json())
        .then(data => setfragrances(data.products));
    }, [])
    
  return (
    <>
        <h1 className="text-center text-4xl font-bold text-blue-500 my-16 montserrat-font">Fragrances</h1>
            <div ref={refFragrances}>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4 pb-10">
                    {
                        (fragrances && fragrances.length > 0) &&
                        fragrances.map((fragrance, ind) => (
                            <Link key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} ${(inViewFragrances === true) ? "show-phones" : ""} hidden-phones flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105`}>
                                <div className="w-full h-3/5 p-3">
                                    <img className="w-full h-full object-contain" src={fragrance.images[0]} />
                                </div>
                                <div className="w-full h-2/5 p-3">
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center font-bold`}>{fragrance.title}</h1>
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center`}><span className="line-through text-red-500">${Math.floor(fragrance.price * (fragrance.discountPercentage/100) + fragrance.price)}</span> <span className="text-green-500 font-bold">{fragrance.price}$</span></h1>
                                </div>
                                <h1 className="absolute top-0 -right-4 text-lg font-bold text-red-600 percentages">-{fragrance.discountPercentage}%</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
    </>
  )
}

export default Fragrances