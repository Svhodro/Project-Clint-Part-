import React from 'react'
import Nav from '../Components/Header/Nav'
import Hero from '../Components/Hero/Hero'

function Home() {
  return (
    <div className='md:px-10'>
      {/* navbar */}
      <Nav />
      {/* carosel */}
      <Hero />
      {/* card */}
     
    </div>
  )
}

export default Home