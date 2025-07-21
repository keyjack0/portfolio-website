import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center pt-20'>
            <div>
                <Image src={assets.fotodiri} alt='' className='w-32 h-32 rounded-full object-cover mx-auto mt-20' />
            </div>
            
                <h3 className='flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo'>Hi I am Dzaky Hamid <Image src={assets.hand_icon} alt='' className='w-6' /></h3>
                <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Sofware Developer Enthusiast</h1>
                <p className='max-w-2xl mx-auto font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ullam impedit odit animi dicta voluptatem expedita, consequuntur voluptas neque commodi?</p>
                <div className='flex flex-col items-center gap-4 mt-4 sm:flex-row'>
                    {/* <a href="#contact" 
                    className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full hover:-translate-y-1 duration-500 '>Contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a> */}

                    <a href="#"
                    download className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full hover:-translate-y-1 duration-500 hover:shadow-black'>My resume <Image src={assets.download_icon} alt='' className='w-4' /></a>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Header
