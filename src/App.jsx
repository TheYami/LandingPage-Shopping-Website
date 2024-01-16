import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'
import TopProduct from './components/TopProduct/TopProduct'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

function App() {

  const [orderPopup,setOrderPopup] = useState(false)

  const handleOrderPopup = ()=>{
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup}/> 
      <Hero/>
      <Product/>
      <TopProduct/>
      <Banner/>
      <Subscribe/>
      <Product/>
      <Testimonial/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App
