import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import About from '../components/About'

const Home = () => {
  return (
    <>
    <div className='bg-[#f3f4f6] text-black min-h-screen font-sans'>
        <Navbar/>
        <Banner/>
        <About/>
    </div>
    </>
  )
}

export default Home