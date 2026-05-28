import React from 'react'
import rion from '../assets/images/IMG_3391.PNG'
const Banner = () => {
  return (
    <>
    <section
        id='home'
        className='max-w-7xl mx-auto px-6 py-7 lg:py-24 grid lg:grid-cols-2 items-center gap-16'
      >
        <div>
          <p className='text-gray-600 mb-3'>Hello, I’m</p>

          <h1 className='text-5xl lg:text-7xl font-black leading-tight'>
            Full Stack
            <br />
            Developer
          </h1>

          <p className='text-gray-600 mt-6 text-lg max-w-xl leading-8'>
            I create beautiful responsive websites using React, Tailwind CSS,
            and modern frontend technologies.
          </p>

          <div className='flex gap-5 mt-10'>
            <button className='bg-white text-black px-7 py-3 rounded-full font-semibold hover:scale-105 duration-300'>
              Hire Me
            </button>

            <button className='border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black duration-300'>
              Download CV
            </button>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='w-[320px] h-[420px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl'>
            <img
              className='w-full h-full object-cover'
              src={rion}
              alt='profile'
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner