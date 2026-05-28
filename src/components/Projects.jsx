import React from 'react'

const Projects = () => {

    const projects = [
    {
      title: 'E-Commerce Website',
      desc: 'Modern responsive shopping website with cart and product details page.',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Portfolio Website',
      desc: 'Creative portfolio website with animation and responsive layout.',
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Dashboard UI',
      desc: 'Admin dashboard with charts, analytics and clean interface.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
  ]
  
  return (
    <>
    <section id='projects' className='py-24 border-t border-black/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-4xl font-bold mb-14 text-center'>Projects</h2>

          <div className='grid lg:grid-cols-3 gap-8'>
            {projects.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-black/10 rounded-[30px] overflow-hidden hover:-translate-y-2 duration-300'
              >
                <div className='h-[250px] overflow-hidden'>
                  <img
                    className='w-full h-full object-cover hover:scale-110 duration-500'
                    src={item.image}
                    alt='project'
                  />
                </div>

                <div className='p-7'>
                  <h3 className='text-2xl font-bold'>{item.title}</h3>

                  <p className='text-gray-600 mt-4 leading-7'>{item.desc}</p>

                  <div className='flex gap-4 mt-6'>
                    <button className='bg-white text-black px-5 py-2 rounded-full font-medium'>
                      Live Demo
                    </button>

                    <button className='border border-white px-5 py-2 rounded-full'>
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects