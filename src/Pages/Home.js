import React from 'react'
import About from '../Components/About'
import FeaturedProject from '../Components/FeaturedProject'
import OurTeam from '../Components/OurTeam'
import Pricing from '../Components/Pricing'
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
        <Pricing />
    </div>
  )
}

export default Home