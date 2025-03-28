import { React, useContext, useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ColorContext } from '../App'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import logo from "../assets/images/logo.png"

function Products() {
  const [darkMode] = useContext(ColorContext)
  const [products, setproducts] = useState({})
  const [page, setpage] = useState(0)
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    fetch('https://dummyjson.com/test')
    .then(data => data.json())
    .then(data => {
        (data.status === "ok") && 
        fetch(`https://dummyjson.com/products?limit=12&skip=${page}&select=title,images,price,discountPercentage`)
        .then(data => data.json())
        .then(data => setproducts(data.products))
    })
  }, [page])

  const right = () => {
    if(page >= 0 && page <= 180) setpage(p => p+12)
    else setpage(0)
  }
  const left = () => {
    if(page === 0) setpage(190)
    else setpage(p => p-12)
  }

  return (
    <div className={`${darkMode && "bg-gray-700"}`}>
        <Header />
        <div className="flex justify-center my-10 gap-3">
          <button><FaArrowLeft onClick={e => left()} className="cursor-pointer text-lg" /></button>
          <button><FaArrowRight onClick={e => right()} className="cursor-pointer text-lg" /></button>
        </div>
        <div className="min-h-screen flex justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4">
            {
              (products && products.length > 0) &&
              products.map((prod, ind) => (
                <Link to={`/product/${prod.id}`} key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105 duration-300`}>
                    <div className={` w-full h-3/5 p-3`}>
                        <img loading="lazy" onLoad={e => imageLoaded(ind)} className="w-full h-full object-contain duration-500" src={(loadedImages[ind] === false) ? logo : prod.images[0]} alt={prod.title} />
                    </div>
                    <div className="w-full h-2/5 p-3">
                        <h1 className={`${(darkMode) ? "text-white" : ""} text-center font-bold`}>{prod.title}</h1>
                        <h1 className={`${(darkMode) ? "text-white" : ""} text-center`}><span className="line-through text-red-500">${Math.floor(prod.price * (prod.discountPercentage/100) + prod.price)}</span> <span className="text-green-500 font-bold">{prod.price}$</span></h1>
                    </div>
                    <h1 className="absolute top-0 -right-4 text-lg font-bold text-red-600 percentages">-{prod.discountPercentage}%</h1>
                </Link>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center my-10 gap-3">
          <button><FaArrowLeft onClick={e => left()} className="cursor-pointer text-lg" /></button>
          <button><FaArrowRight onClick={e => right()} className="cursor-pointer text-lg"/></button>
        </div>
        <Footer />
    </div>
  )
}

export default Products