import { React, useState, useContext, useRef, useEffect } from 'react'
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom'
import { MdOutlineDarkMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoSunny } from "react-icons/io5";
import { ColorContext } from '../App';

function Header() {
  const [menu, setmenu] = useState(false)
  const [darkMode, setdarkMode] = useContext(ColorContext)
  const [search, setSearch] = useState(false)
  const [searchProducts, setSearchProducts] = useState([])
  const input = useRef()

  useEffect(() => {
    console.log("rerendered")
  })

  const startSearch = () => {
    if(search){
      setSearch(p => !p)
      input.current.value = ""
      setSearchProducts([])
    }else{
      setSearch(p => !p)
      input.current.focus()
    }
  }

  const keyPress = e => {
    if(input.current.value === ""){
      setSearchProducts([])
    }else{
      fetch('https://dummyjson.com/test')
      .then(data => data.json())
      .then(data => {
          (data.status === "ok") && 
          fetch(`https://dummyjson.com/products/search?q=${input.current.value}`)
          .then(data => data.json())
          .then(data => setSearchProducts(data.products))
      })
    }
  }

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

  return (
    <>
      <div className={`${(darkMode) ? "bg-gray-800" : "bg-gray-200"} sticky top-0 w-full h-16 flex justify-center z-10 drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)]`}>
        <div className="w-2/3 h-full flex">
          <div className="w-1/2 flex items-center">
            <div className="w-16 h-16 bg-gray-400 relative flex justify-center items-center">
              <Link to="/">
                <img src={logo} alt={logo} className="w-11 h-11" />
              </Link>
              <div className="absolute top-full w-10 triangle"> 
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <Link to="/products" className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Products</Link>
            <Link to="/categories" className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Categories</Link>
            <Link to="/" className={`${(darkMode) ? "text-white" : ""} hidden md:block mx-3 hover:text-gray-400 hover:underline duration-300`}>Home</Link>
            <div className="hidden md:flex items">
              <button onClick={e => startSearch()} className={`bg-green-400 hover:bg-green-300 ms-2 rounded-lg p-2 `}>
                  <FaSearch className="text-white" />
              </button>
              <button onClick={() => setdarkMode(!darkMode)} className={`${(darkMode) ? "bg-white hover:bg-gray-200" : "bg-blue-900 hover:bg-blue-700"} ms-2 rounded-lg p-2 `}>
                {
                  (darkMode) ?
                  <IoSunny className="text-blue-900" /> :
                  <MdOutlineDarkMode className="text-white" />
                }
              </button>
            </div>
            <button onClick={() => setmenu(!menu)} className={`${(menu) ? "hidden" : "block"} md:hidden cursor-pointer`}>
              <RxHamburgerMenu className={`${(darkMode) ? "text-white" : ""}`} />
            </button>
            <button onClick={() => setmenu(!menu)} className={`${(menu) ? "block" : "hidden"} md:hidden cursor-pointer`}>
              <IoMdClose className={`${(darkMode) ? "text-white" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile MENU */}
        <div className={`${(menu) ? "top-16" : "-top-[1000%]"} ${(darkMode) ? "bg-gray-800" : "bg-gray-200"} flex md:hidden flex-col items-start w-1/2 h-[550px] absolute right-0 bg-gray-200 duration-300 px-3 gap-3`}>
            <Link to="/products" className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Products</Link>
            <Link to="/categories" className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Categories</Link>
            <Link to="/" className={`${(darkMode) ? "text-white" : ""} mx-3 hover:text-gray-400 hover:underline duration-300`}>Home</Link>
            <div>
              <button onClick={e => startSearch()} className={`bg-green-400 hover:bg-green-300 ms-2 rounded-lg p-2 `}>
                <FaSearch className="text-white" />
              </button>
              <button onClick={() => setdarkMode(!darkMode)} className={`${(darkMode) ? "bg-white hover:bg-gray-200" : "bg-blue-900 hover:bg-blue-700"} ms-2 rounded-lg p-2 `}>
                {
                  (darkMode) ?
                  <IoSunny className="text-blue-900" /> :
                  <MdOutlineDarkMode className="text-white" />
                }
              </button>
            </div>
        </div>

      </div>
      
      {/* SearchDiv */}
      <div className={`${(search === true) && "show-search_div"} hide-search_div ${(darkMode === true) ? "bg-gray-700" : "bg-white"} w-full h-screen fixed top-16 z-20 overflow-scroll`}>
        <div className="w-full lg:h-20 md:h-16 h-10 flex justify-center">
          <div className="w-2/3 h-full flex items-center mt-3">
              <input ref={input} onChange={e => keyPress(e)} className={`${(darkMode === true) ? "bg-gray-700 text-white" : ""} border-none focus:outline-none w-full h-full ps-3 lg:text-4xl md:text-2xl text-xl`} placeholder="Search..." />
              <button className="w-20 h-20" onClick={e => startSearch()}>
                <IoMdClose className={`${(darkMode) ? "text-white" : ""} text-3xl mx-auto`} />
              </button>
          </div>
        </div>
          <div className="w-2/3 mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {
                (searchProducts && searchProducts.length > 0) &&
                searchProducts.map((prod, ind) => (
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
    </>
  )
}

export default Header