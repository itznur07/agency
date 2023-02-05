import React from 'react'
import About from '../Components/About'
import FeaturedProject from '../Components/FeaturedProject'
import OurTeam from '../Components/OurTeam'
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
        <OurTeam />
    </div>
  )
}

export default Home