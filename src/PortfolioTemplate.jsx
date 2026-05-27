
import { useEffect, useState } from 'react'

export default function PortfolioTemplate() {
    const [activeSection, setActiveSection] = useState('home')

useEffect(() => {
  const sections = document.querySelectorAll('section')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    {
      threshold: 0.6,
    }
  )

  sections.forEach((section) => observer.observe(section))

  return () => {
    sections.forEach((section) => observer.unobserve(section))
  }
}, [])
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
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .floating-arrow {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>

      <div className='bg-[#f3f4f6] text-black min-h-screen font-sans'>
      {/* ================= NAVBAR ================= */}
      <nav className='border-b border-black/10 sticky top-0 bg-[#f3f4f6]/80 backdrop-blur-md z-50 w-full'>
        <div className='max-w-7xl mx-auto px-6 py-5 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>RION.</h1>

          <ul className='hidden md:flex gap-5 text-sm'>
  <li>
    <a
      href='#home'
      className={`px-5 py-2 rounded-full duration-300 ${
        activeSection === 'home'
          ? 'bg-black text-white'
          : 'hover:bg-black hover:text-white'
      }`}
    >
      Home
    </a>
  </li>

  <li>
    <a
      href='#about'
      className={`px-5 py-2 rounded-full duration-300 ${
        activeSection === 'about'
          ? 'bg-black text-white'
          : 'hover:bg-black hover:text-white'
      }`}
    >
      About
    </a>
  </li>

  <li>
    <a
      href='#skills'
      className={`px-5 py-2 rounded-full duration-300 ${
        activeSection === 'skills'
          ? 'bg-black text-white'
          : 'hover:bg-black hover:text-white'
      }`}
    >
      Skills
    </a>
  </li>

  <li>
    <a
      href='#projects'
      className={`px-5 py-2 rounded-full duration-300 ${
        activeSection === 'projects'
          ? 'bg-black text-white'
          : 'hover:bg-black hover:text-white'
      }`}
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href='#contact'
      className={`px-5 py-2 rounded-full duration-300 ${
        activeSection === 'contact'
          ? 'bg-black text-white'
          : 'hover:bg-black hover:text-white'
      }`}
    >
      Contact
    </a>
  </li>
</ul>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section
        id='home'
        className='max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-16'
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
              src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop'
              alt='profile'
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
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
              <h3 className='text-5xl font-black'>2+</h3>
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
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
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

      {/* ================= PROJECTS ================= */}
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

      {/* ================= CONTACT ================= */}
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

      {/* ================= FOOTER ================= */}
      <footer className='border-t border-black/10 py-8 text-center text-gray-500'>
        © 2026 RION Portfolio Website
      </footer>

        <div className='fixed bottom-8 right-8 z-50'>
        <a
          href='#home'
          className='floating-arrow w-[60px] h-[60px] rounded-full border-4 border-green-500 flex items-center justify-center text-3xl bg-white shadow-2xl hover:scale-110 duration-300'
        >
          ↑
        </a>
      </div>
      </div>
    </>
  )
}
