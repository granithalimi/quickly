import { React, useContext, useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ColorContext } from '../App'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

function Products() {
  const [darkMode] = useContext(ColorContext)
  const [products, setproducts] = useState({})
  const [page, setpage] = useState(0)
  
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${page}&select=title,images,price,discountPercentage`)
    .then(data => data.json())
    .then(data => setproducts(data.products))
  }, [products])
  const right = () => {
    if(page >= 0 && page <= 180) setpage(p => p+10)
    else setpage(0)
  }
  const left = () => {
    if(page === 0) setpage(190)
    else setpage(p => p-10)
  }

  return (
    <div className={`${darkMode && "bg-gray-700"}`}>
        <Header />
        <div className="flex justify-center my-10 gap-3">
          <buttons><FaArrowLeft onClick={e => left()} className="cursor-pointer text-lg" /></buttons>
          <buttons><FaArrowRight onClick={e => right()} className="cursor-pointer text-lg" /></buttons>
        </div>
        <div className="min-h-screen flex justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4">
            {
              (products && products.length > 0) &&
              products.map((prod, ind) => (
                <Link key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105 duration-300`}>
                    <div className="w-full h-3/5 p-3">
                        <img className="w-full h-full object-contain" src={prod.images[0]} />
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
          <buttons><FaArrowLeft onClick={e => left()} className="cursor-pointer text-lg" /></buttons>
          <buttons><FaArrowRight onClick={e => right()} className="cursor-pointer text-lg"/></buttons>
        </div>
        <Footer />
    </div>
  )
}

export default Products