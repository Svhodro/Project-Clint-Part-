import React from 'react'
import Nav from '../Components/Header/Nav'
import Hero from '../Components/Hero/Hero'
import LatestCard from '../Components/Cards/Latest/LatestCard'
import Shoping from '../Components/Cards/ShopingCard/Shoping'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <div className='md:px-10'>
      {/* navbar */}
      <Nav />
      {/* line */}
      <div className="flex justify-center py-6">
        <hr className='w-5/6 border-slate-600 ' />
      </div>
      {/* carosel */}
      <Hero />
      {/* card */}
      <div className="flex justify-center py-6">
        <hr className='w-5/6 border-slate-600 ' />
      </div>
      {/* Latest section */}
      <p className='md:text-2xl pl-3 md:p-0 font-serif '>Latest Product</p>
      {/* latest card's */}
      <LatestCard />

      <div className="flex justify-center py-6">
        <hr className='w-5/6 border-slate-600 ' />
      </div>
      {/* discount shower card  */}
      <Shoping />
      <div className="flex justify-center py-6">
        <hr className='w-5/6 border-slate-600 ' />
      </div>
      <p className='md:text-2xl pl-3 md:p-0 font-serif '>Shop By Category</p>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home