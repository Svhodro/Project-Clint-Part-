import React from 'react'
import Nav from '../Components/Header/Nav'
import Hero from '../Components/Hero/Hero'
import LatestCard from '../Components/Cards/Latest/LatestCard'

function Home() {
  return (
    <div className='md:px-10'>
      {/* navbar */}
      <Nav />
      {/* line */}
      <div className="flex justify-center py-6">
      <hr className='w-5/6 border-slate-600 '/>
      </div>
      {/* carosel */}
      <Hero />
      {/* card */}
      <div className="flex justify-center py-6">
      <hr className='w-5/6 border-slate-600 '/>
      </div>
      {/* Latest section */}
      <p className='md:text-2xl pl-3 md:p-0 font-serif '>Latest Product</p>
       {/* latest card's */}
       <LatestCard/>
      
     
    </div>
  )
}

export default Home