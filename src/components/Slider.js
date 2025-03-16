import { React, useState, useEffect, useRef} from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import image1 from "../assets/slider images/image1.webp"
import image2 from "../assets/slider images/image2.webp"
import image3 from "../assets/slider images/image3.webp"
import image4 from "../assets/slider images/image4.webp"

function Slider() {
  const [index, setindex] = useState(0)
  const intervalId = useRef(null)

  useEffect(() => {
    intervalId.current = setInterval(() => {
      right()
    }, 3000)
  
    return () => {
      clearInterval(intervalId.current)
    }
  }, [index])
  

  const right = () => {
    if(index === images.length - 1){
      setindex(0)
    }else{
      setindex(p => p + 1)
    }
  }
  const left = () => {
    if(index === 0){
      setindex(images.length - 1)
    }else{
      setindex(p => p - 1)
    }
  }
  const change = ind => {
    setindex(ind)
  }

  const images = [
    image1,
    image2,
    image3,
    image4,
  ] 

  return (
    <div className="w-full h-full">
      <div className="w-full xl:h-[615px] md:h-[380px] h-[250px] flex overflow-hidden relative">
        {
          images.map((img, ind) => (
            <img alt={img} key={ind} src={img} className="w-full h-full object-cover shrink-0 grow-0 duration-300" style={{translate : `${-100 * index}%`}} />
          ))
        }    
        <button onClick={e => left()} className="absolute px-3 left-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.5)] text-white text-2xl duration-500"><FaArrowLeft /></button>
        <button onClick={e => right()} className="absolute px-3 right-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.5)] text-white text-2xl duration-500"><FaArrowRight /></button>
        <div className="absolute bottom-0 h-10 w-full flex justify-center items-center">
          {
            images.map((_, ind) => (
              <button key={ind} onClick={e => change(ind)} className={`${(ind === index) ? "p-2" : "p-1"} rounded-lg bg-white mx-3 duration-300`}></button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider