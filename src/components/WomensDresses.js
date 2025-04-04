import { React, useState, useEffect, useContext} from 'react'
import { ColorContext } from '../App'
import '../assets/css/style.css'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"

function WomensDresses() {
    const [womensDresses, setwomensDresses] = useState([])
    const [darkMode] = useContext(ColorContext)
    const [loadedImages, setloadedImages] = useState(
        Array(12).fill(false)
    )

    const imageLoaded = (ind) => {
        setloadedImages(p => {
            const updatedArray = [...p]
            updatedArray[ind] = true
            return updatedArray
        })
    }

    const [refDresses, inViewDresses] = useInView({
        threshold: .5,
        triggerOnce: true,
    });

    useEffect(() => {
        fetch('https://dummyjson.com/test')
        .then(data => data.json())
        .then(data => {
            (data.status === "ok") && 
            fetch('https://dummyjson.com/products/category/womens-dresses?limit=4&select=title,images,price,discountPercentage')
            .then(res => res.json())
            .then(data => setwomensDresses(data.products));
        })
    }, [])
    
  return (
    <>
        <h1 className="text-center text-4xl font-bold text-blue-500 mb-16 montserrat-font">Womens Dresses</h1>
            <div ref={refDresses}>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4 pb-10">
                    {
                        (womensDresses && womensDresses.length > 0) &&
                        womensDresses.map((dress, ind) => (
                            <Link to={`/product/${dress.id}`} key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} ${(inViewDresses === true) ? "show-phones" : ""} hidden-phones flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105`}>
                                <div className="w-full h-3/5 p-3">
                                    <img loading="lazy" onLoad={e => imageLoaded(ind)} className="w-full h-full object-contain" src={(loadedImages[ind] === false) ? logo : dress.images[0]} alt={dress.title} />
                                </div>
                                <div className="w-full h-2/5 p-3">
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center font-bold`}>{dress.title}</h1>
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center`}><span className="line-through text-red-500">${Math.floor(dress.price * (dress.discountPercentage/100) + dress.price)}</span> <span className="text-green-500 font-bold">{dress.price}$</span></h1>
                                </div>
                                <h1 className="absolute top-0 -right-4 text-lg font-bold text-red-600 percentages">-{dress.discountPercentage}%</h1>
                            </Link>
                        ))
                    }
                </div>
            </div>
    </>
  )
}

export default WomensDresses