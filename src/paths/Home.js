import { React, useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ColorContext } from '../App'
import SubHeader from '../components/SubHeader';
import Smartphones from '../components/Smartphones';

function Home() {
  const [darkMode] = useContext(ColorContext);
  const [fragrances, setfragrances] = useState([])
  const [womenDresses, setwomenDresses] = useState([])
  const [menShirts, setmenShirts] = useState([])

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
      fetch('https://dummyjson.com/products/category/fragrances?limit=4')
      .then(res => res.json())
      .then(data => setfragrances(data.products));
      fetch('https://dummyjson.com/products/category/womens-dresses?limit=4')
      .then(res => res.json())
      .then(data => setwomenDresses(data.products));
      fetch('https://dummyjson.com/products/category/mens-shirts?limit=4')
      .then(res => res.json())
      .then(data => setmenShirts(data.products));
    });
  }, [])
  

  return (
    <div className={`${darkMode ? "bg-gray-700" : ""}`}>
      <Header />
      <SubHeader />
      <Slider />
      <Smartphones />

    </div>
  )
}

export default Home