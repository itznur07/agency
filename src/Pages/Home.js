import React from 'react'
import About from '../Components/About'
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
    </div>
  )
}

export default Home