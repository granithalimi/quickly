import React from 'react'
import { IoMdPricetags } from "react-icons/io";
import { FaTruckMoving } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

function SubHeader() {
  return (
    <div className="flex justify-center gap-3">
        <div className="w-1/3 h-28 bg-green-300 flex flex-col justify-center items-center">
            <IoMdPricetags className="text-3xl me-3" />
            <p className="text-black md:text-xl text-xs">Best Prices</p>
        </div>
        <div className="w-1/3 h-28 bg-green-300 flex flex-col justify-center items-center">
            <FaTruckMoving className="text-3xl me-3" />
            <p className="text-black md:text-xl text-xs">Quick Delivery</p>
        </div>
        <div className="w-1/3 h-28 bg-green-300 flex flex-col justify-center items-center">
            <FaWifi className="text-3xl me-3" />
            <p className="text-black md:text-xl text-xs">Online Paying</p>
        </div>
    </div>
  )
}

export default SubHeader