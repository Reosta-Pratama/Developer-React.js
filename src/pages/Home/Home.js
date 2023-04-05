import React from 'react'
import Blog from '../../components/Blog/Blog'
import Hero from '../../components/Hero/Hero'
import Portfolio from '../../components/Portfolio/Portfolio'
import Price from '../../components/Price/Price'
import Service from '../../components/Service/Service'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div className='main-container'>
        <Hero></Hero>
        <Service></Service>
        <Portfolio></Portfolio>
        <Testimonial></Testimonial>
        <Blog></Blog>
        <Price></Price>
    </div>
  )
}

export default Home
