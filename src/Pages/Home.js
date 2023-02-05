import React from 'react'
import About from '../Components/About'
import Blog from '../Components/Blog'
import FeaturedProject from '../Components/FeaturedProject'
import OurTeam from '../Components/OurTeam'
import Pricing from '../Components/Pricing'
import ProductQue from '../Components/ProductQue'
import Services from '../Components/Services'
import Summery from '../Components/SummeryBanner'
import Testimonial from '../Components/Testimonial'

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
        <Testimonial />
        <Blog />
    </div>
  )
}

export default Home