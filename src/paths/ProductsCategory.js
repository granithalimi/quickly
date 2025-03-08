import { React, useContext, useState, useEffect} from 'react'
import { ColorContext } from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, useParams } from 'react-router-dom'

function ProductsCategory() {
    const { category } = useParams()
    const [darkMode] = useContext(ColorContext)
    const [products, setproducts] = useState({})

    useEffect(() => {
      window.scrollTo(0, 0);
      fetch('https://dummyjson.com/test')
      .then(data => data.json())
      .then(data => {
          (data.status === "ok") && 
          fetch(`https://dummyjson.com/products/category/${category}`)
          .then(data => data.json())
          .then(data => setproducts(data.products))
      })
    }, [])
    
  return (
    <div className={`${(darkMode === true) && "bg-gray-700"}`}>
        <Header />
        <div className="min-h-screen flex justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 mx-auto w-2/3 gap-4 my-20">
            {
              (products && products.length > 0) &&
              products.map((prod, ind) => (
                <Link key={ind} className={`${darkMode ? "hover:bg-gray-500" : "hover:bg-gray-200"} flex flex-col border border-gray-300 rounded-xl h-72 relative cursor-pointer hover:scale-105 duration-300`}>
                    <div className="w-full h-3/5 p-3">
                        <img className="w-full h-full object-contain" src={prod.images[0]} alt={prod.images[0]} />
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
        <Footer />
    </div>
  )
}

export default ProductsCategory