import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'

const Services = ({ isDarkMode }) => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo '>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      As a Software Engineer, I specialize in designing and developing scalable web applications. I provide end-to-end solutions that combine clean code, modern technologies, and user-centered design to help businesses and individuals bring their ideas to life.
      </p>

      <div className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({ icon, iconDark, title, description, link }, index) => (
          <div
            key={index}
            className={`border-[0.5px] rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500
              ${isDarkMode 
                ? 'border-white dark:hover:shadow-white hover:bg-darkHover/50 text-white' 
                : 'border-gray-400 hover:shadow-black hover:bg-lightHover text-gray-700'}`}
          >
            <Image src={isDarkMode && iconDark ? iconDark : icon} alt={title} className='w-10' />
            <h3 className={`text-lg my-4 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{title}</h3>
            <p className={`text-sm leading-5 ${isDarkMode ? 'text-white/80' : 'text-gray-600'}`}>{description}</p>
            {/* <a href={link} className={`flex items-center gap-2 mt-5 text-sm ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>
              Read more <Image src={assets.right_arrow} alt='' className='w-4' />
            </a> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
