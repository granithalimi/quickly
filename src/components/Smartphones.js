import { React, useState, useEffect, useContext} from 'react'
import { ColorContext } from '../App'
import '../assets/css/style.css'
import { useInView } from 'react-intersection-observer'

function Smartphones() {
    const [smartphones, setsmartphones] = useState([])
    const [darkMode, setdarkMode] = useContext(ColorContext)

    const [refPhones, inViewPhones] = useInView({
        threshold: .5,
        triggerOnce: true,
    });

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones?limit=4')
        .then(res => res.json())
        .then(data => setsmartphones(data.products));
    }, [])
    
  return (
    <>
        <h1 className="text-center text-4xl font-bold text-blue-500 my-16 montserrat-font">-New Smartphones-</h1>
            <div ref={refPhones}>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4 pb-10">
                    {
                        (smartphones && smartphones.length > 0) &&
                        smartphones.map((phone, ind) => (
                            <div key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} ${(inViewPhones === true) ? "show-phones" : ""} hidden-phones flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105`}>
                                <div className="w-full h-3/5 p-3">
                                    <img className="w-full h-full object-contain" src={phone.images[0]} />
                                </div>
                                <div className="w-full h-2/5 p-3">
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center font-bold`}>{phone.title}</h1>
                                    <h1 className={`${(darkMode) ? "text-white" : ""} text-center`}><span className="line-through text-red-500">${Math.floor(phone.price * (phone.discountPercentage/100) + phone.price)}</span> <span className="text-green-500 font-bold">{phone.price}$</span></h1>
                                </div>
                                <h1 className="absolute top-0 -right-4 text-lg font-bold text-red-600 percentages">-{phone.discountPercentage}%</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
    </>
  )
}

export default Smartphones