import React from 'react'

const About = () => {
  return (
    <>
    <section id='about' className='py-24 border-t border-black/10'>
        <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16'>
          <div>
            <h2 className='text-4xl font-bold mb-8'>About Me</h2>

            <p className='text-gray-600 leading-8 text-lg'>
              I am a passionate Full Stack developer who loves building modern and
              interactive user interfaces. I enjoy creating responsive websites
              and improving user experiences with clean design.
            </p>
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white border border-black/10 p-8 rounded-3xl'>
              <h3 className='text-5xl font-black'>1+</h3>
              <p className='text-gray-600 mt-3'>Years Experience</p>
            </div>

            <div className='bg-white border border-black/10 p-8 rounded-3xl'>
              <h3 className='text-5xl font-black'>10+</h3>
              <p className='text-gray-600 mt-3'>Projects Done</p>
            </div>

            <div className='bg-white border border-black/10 p-8 rounded-3xl'>
              <h3 className='text-5xl font-black'>100%</h3>
              <p className='text-gray-600 mt-3'>Responsive Design</p>
            </div>

            <div className='bg-white border border-black/10 p-8 rounded-3xl'>
              <h3 className='text-5xl font-black'>15+</h3>
              <p className='text-gray-600 mt-3'>Technologies</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About