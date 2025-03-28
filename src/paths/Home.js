import { React, useContext, useEffect} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ColorContext } from '../App'
import SubHeader from '../components/SubHeader';
import Smartphones from '../components/Smartphones';
import WomensDresses from '../components/WomensDresses';
import MenShirts from '../components/MenShirts';
import Footer from '../components/Footer';
import ProductsSection from '../components/ProductsSection';
import CategoriesSection from '../components/CategoriesSection';

function Home() {
  const [darkMode] = useContext(ColorContext);

  useEffect(() => {
    console.log("rerendered")
  })
  
  useEffect(() => {
    window.scrollTo(0, 0);
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