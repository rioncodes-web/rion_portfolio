import React from 'react'

const Skills = () => {

    const skills = [
    {
      name: 'HTML',
      icon: '🔥',
    },
    {
      name: 'CSS',
      icon: '🎨',
    },
    {
      name: 'JavaScript',
      icon: '⚡',
    },
    {
      name: 'React',
      icon: '⚛️',
    },
    {
      name: 'Node JS',
      icon: '🚀',
    },
    {
      name: 'MongoDB',
      icon: '🟢',
    },
  ]
  return (
    <>
    <section id='skills' className='py-24 border-t border-black/10'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-4xl font-bold mb-14 text-center'>My Skills</h2>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
            {skills.map((item, index) => (
              <div
                key={index}
                className='bg-white border border-black/10 rounded-3xl py-10 text-center hover:-translate-y-3 duration-300 group'
              >
                <div className='text-5xl mb-4 group-hover:animate-bounce'>
                  {item.icon}
                </div>

                <h3 className='font-semibold text-lg'>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills