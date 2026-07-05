import React from 'react'
import Navbar from '../Layout/Navbar'
import Hero from './Hero'
import HowItWorks from './HowItWorks'
import CTA from './CTA'
import Footer from '../Layout/Footer'
const Landing = () => {
  return (
    <div>
        <Hero/>
      <Navbar/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Landing
