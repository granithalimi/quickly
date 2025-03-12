import { React, useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ColorContext } from '../App'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Product() {
    const {id} = useParams()
    const [product, setproduct] = useState({})
    const [index, setindex] = useState(0)
    const [darkMode] = useContext(ColorContext)
    useEffect(() => {
        fetch('https://dummyjson.com/test')
        .then(data => data.json())
        .then(data => {
            (data.status === "ok") && 
            fetch(`https://dummyjson.com/products/${id}`)
            .then(data => data.json())
            .then(data => setproduct(data))
        })
    }, [])

    const right = () => {
        if(index === product.images.length - 1){
          setindex(0)
        }else{
          setindex(p => p + 1)
        }
    
    }
    const left = () => {
    if(index === 0){
        setindex(product.images.length - 1)
    }else{
        setindex(p => p - 1)
    }

    }
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
  return (
    <>
        <Header />
        <div className={`${(darkMode === true) ? "bg-gray-700" : "bg-white"} min-h-screen flex justify-center items-center`}>
            {
                (product.title) &&
                <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="h-96 mx-auto flex overflow-hidden relative">
                        {/* FIX PLS */}
                        {
                            (product.images.length > 1) ?
                            product.images.map((img, ind) => (
                                <img key={ind} src={img} className="w-full h-full object-contain shrink-0 grow-0 duration-300" style={{translate : `${-100 * index}%`}}/>
                            )) :
                            <img src={product.images[0]} className="w-full h-full object-contain shrink-0 grow-0 duration-300" style={{translate : `${-100 * index}%`}}/>
                        }
                        <button onClick={e => left()} className={`absolute px-3 left-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.1)] ${(darkMode === true) ? "text-white" : "text-black"} text-2xl duration-500`}><FaArrowLeft /></button>
                        <button onClick={e => right()} className={`absolute px-3 right-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.1)] ${(darkMode === true) ? "text-white" : "text-black"} text-2xl duration-500`}><FaArrowRight /></button>

                    </div>
                    <div className="flex flex-col justify-between items-start">
                        <div className="w-full">
                            <h1 className="text-3xl montserrat-font mb-5 text-blue-500">{product.title}</h1>
                            <p className={`${(darkMode === true) ? "text-white" : "text-gray-500"}`}>{product.description}</p>
                            <p className={`${(darkMode === true) ? "text-white" : "text-gray-500"} font-bold`}>Price: <span className="line-through text-red-500">${Math.floor(product.price * (product.discountPercentage/100) + product.price)}</span> <span className="text-green-500">${product.price}</span></p>
                        </div>
                        <button className="mb-10 px-3 py-1 rounded-lg text-white bg-blue-400 hover:bg-blue-300 duration-300">ORDER NOW!</button>
                    </div>
                </div>
            }
        </div>
        <Footer />
    </>
  )
}

export default Product