import React from 'react'
import Nav from '../Components/Nav/Nav'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className='w-full'>
        <p className='text-lg font-serif font-bold p-4'>latest Product</p>
        <div className='w-full flex justify-center items-center flex-wrap'>
          <div className='w-full flex justify-center items-center'>
            <div className="card card-compact w-52 md:w-80 bg-base-100 shadow-xl rounded-none ">
              <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Cart />

    </>
  )
}

export default Home