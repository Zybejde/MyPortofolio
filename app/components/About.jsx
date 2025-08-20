import React from 'react'
import { assets, toolsData,  infoList } from '@/assets/assets'
import Image from 'next/image'

const About  = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-5 scroll'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo '>About me</h2>
    
    <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20 '>
        <div className='w-64 sm:w-80 rounded-3xl  max-w-none '>
            <Image  src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>I’m a Software Engineer with experience in designing, developing, and maintaining reliable software solutions. My focus is on writing clean, efficient, and scalable code while solving real-world problems through technology. I enjoy working with modern tools, learning new technologies, and continuously improving my skills to deliver impactful results.</p>
        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7' />
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </li>

            ))}
        </ul>
        <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>
       <ul className='flex items-center gap-3 sm:gap-5'>
        {toolsData.map((tool, index)=>(
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
            </li>
        ))}
       </ul>
        </div>
        </div>
    </div>
  )
}

export default About;