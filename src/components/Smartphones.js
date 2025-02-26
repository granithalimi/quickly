import { React, useState, useEffect, useContext} from 'react'
import { ColorContext } from '../App'

function Smartphones() {
    const [smartphones, setsmartphones] = useState([])
    const [darkMode, setdarkMode] = useContext(ColorContext)

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones?limit=4')
        .then(res => res.json())
        .then(data => setsmartphones(data.products));
    }, [])
    
  return (
    <>
        <h1 className="text-center text-4xl font-bold text-blue-500 my-16">New Smartphones</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4 pb-10">
            {
                (smartphones && smartphones.length > 0) &&
                smartphones.map((phone, ind) => (
                    <div key={ind} className="flex flex-col border border-black">
                        <div className="w-full h-3/4">
                            <img className="w-full h-full object-contain" src={phone.thumbnail} />
                        </div>
                        <div className="w-full h-1/4">
                            <h1 className={`${(darkMode) ? "text-white" : ""} `}>{phone.title}</h1>
                            <h1 className={`${(darkMode) ? "text-white" : ""} `}>{phone.price}$</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Smartphones