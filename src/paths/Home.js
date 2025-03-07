import { React, useContext, useEffect, useState} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ColorContext } from '../App'
import SubHeader from '../components/SubHeader';
import Smartphones from '../components/Smartphones';
import Fragrances from '../components/Fragrances';
import WomensDresses from '../components/WomensDresses';
import MenShirts from '../components/MenShirts';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';
import CategoriesSection from '../components/CategoriesSection';

function Home() {
  const [darkMode] = useContext(ColorContext);
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

      fetch('https://dummyjson.com/products/category/mens-shirts?limit=4')
      .then(res => res.json())
      .then(data => setmenShirts(data.products));
    });
  }, [])
  

  return (
    <div className={`${darkMode && "bg-gray-700"}`}>
      <Header />
      <SubHeader />
      <Slider />
      <div className="h-[50px]"></div>
      <Smartphones />
      <ProductsSection />
      <WomensDresses />
      <CategoriesSection />
      <MenShirts />
      <Footer />
    </div>
  )
}

export default Home