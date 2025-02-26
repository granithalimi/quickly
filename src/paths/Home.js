import { React, useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ColorContext } from '../App'
import SubHeader from '../components/SubHeader';

function Home() {
  const [darkMode] = useContext(ColorContext);
  const [products, setproducts] = useState([])

  useEffect(() => {
    console.log("rerendered")
  })
  
  useEffect(() => {
    // check if the json is working...
    fetch('https://dummyjson.com/test')
    .then(res => res.json())
    .then(data => {
      (data.status == "ok") &&
      // fetch the data if the json is working...
      fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data => setproducts(data));
    });
  }, [])
  

  return (
    <div className={`${darkMode ? "bg-gray-700" : ""}`}>
      <Header />
      <SubHeader />
      <Slider />
    </div>
  )
}

export default Home