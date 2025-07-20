import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { infoList } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-20 mt-20 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
          </p>
          <ul className=''>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li key={index}><Image src={icon} alt={title}/>
              <h3>
                {title}
                <p>{description}</p>
              </h3>
                </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default About
