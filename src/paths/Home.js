import { React, useContext} from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import { ColorContext } from '../App'
import SubHeader from '../components/SubHeader';

function Home() {
  const [darkMode] = useContext(ColorContext);

  return (
    <div className={`${darkMode ? "bg-gray-700" : ""} h-[3000px]`}>
      <Header />
      <SubHeader />
      <Slider />
    </div>
  )
}

export default Home