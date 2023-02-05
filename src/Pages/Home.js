import React from 'react'
import About from '../Components/About'
import FeaturedProject from '../Components/FeaturedProject'
import ProductQue from '../Components/ProductQue'
import Services from '../Components/Services'
import Summery from '../Components/SummeryBanner'

const Home = () => {
  return (
    <div>
        <About />
        <Summery />
        <Services />
        <ProductQue />
        <FeaturedProject />
    </div>
  )
}

export default Home