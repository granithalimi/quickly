import { React, useState} from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function Slider() {
  const images = [
    "https://www.bigbang.si/upload/rotator_element/thumb/1480x540-vikend_679b54284d9b3_1480x540c.webp",
    "https://www.bigbang.si/upload/staticcontent_item/1788/thumb/1480x540-krovno_67a46bf5316b4_1480x1480r.webp",
    "https://www.bigbang.si/upload/rotator_element/thumb/1480x540-mga_67ab18f6b5c10_1480x540c.webp",
    "https://www.bigbang.si/upload/rotator_element/thumb/1480x540-tv_67b3124e005f2_1480x540c.webp",
  ] 

  const right = () => {
    if(index == images.length - 1){
      setindex(0)
    }else{
      setindex(p => p + 1)
    }
  }
  const left = () => {
    if(index == 0){
      setindex(images.length - 1)
    }else{
      setindex(p => p - 1)
    }
  }
  const change = ind => {
    setindex(ind)
  }

  const [index, setindex] = useState(0)
  return (
    <div className="w-full h-[600px] flex overflow-hidden relative">
      {
        images.map((img, ind) => (
          <img key={ind} src={img} className={`w-full h-full object-cover shrink-0 grow-0 -translate-x-[${100 * index}%] duration-300`} />
        ))
      }    
      <button onClick={e => left()} className="absolute px-3 left-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.5)] text-white text-2xl duration-500"><FaArrowLeft /></button>
      <button onClick={e => right()} className="absolute px-3 right-0 top-0 bottom-0 hover:bg-[rgb(0,0,0,0.5)] text-white text-2xl duration-500"><FaArrowRight /></button>
      <div className="absolute bottom-0 h-10 w-full flex justify-center items-center">
        {
          images.map((_, ind) => (
            <button key={ind} onClick={e => change(ind)} className={`${(ind == index) ? "p-2" : "p-1"} rounded-lg bg-white mx-3 duration-300`}></button>
          ))
        }
      </div>
    </div>
  )
}

export default Slider