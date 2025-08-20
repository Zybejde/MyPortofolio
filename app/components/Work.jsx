import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Work = ({ isDarkMode }) => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 text-center'>
      <h4 className='mb-2 text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-5xl font-Ovo'>My latest work</h2>
      <p className='max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Explore a collection of my projects showcasing my expertise in software development.
      </p>

      {/* Centered grid */}
      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[900px]'>
          {workData.map((project, index) => (
            <div
              key={index}
              className='relative rounded-lg overflow-hidden cursor-pointer group shadow-lg'
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                width={500}
                height={500}
                className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700 text-left'>{project.description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send icon' className='w-5' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/Zybejde"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="Right arrow" className="w-4" />
      </a>
    </div>
  )
}

export default Work
