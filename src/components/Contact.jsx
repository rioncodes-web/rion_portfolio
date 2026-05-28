import React from 'react'

const Contact = () => {
  return (
    <>
    <section id='contact' className='py-24 border-t border-black/10'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold'>Let’s Work Together</h2>

          <p className='text-gray-600 mt-6 leading-8 text-lg'>
            Have a project in mind? Feel free to contact me anytime.
          </p>

          <form className='mt-12 space-y-6'>
            <input
              className='w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none'
              type='text'
              placeholder='Your Name'
            />

            <input
              className='w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none'
              type='email'
              placeholder='Your Email'
            />

            <textarea
              className='w-full bg-white border border-black/10 rounded-2xl px-6 py-4 outline-none h-[180px] resize-none'
              placeholder='Message'
            ></textarea>

            <button className='bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300'>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact