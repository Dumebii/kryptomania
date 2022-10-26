import React from 'react'
import Image from 'next/image'
import navbrand from '../../public/navbrand.jpg'


const Footer = () => {
  return (
    <div className='flex flex-col gap-10  items-center justify-evenly md:flex-col sm:flex-col mt-20 mb-20'>
        <Image src={navbrand} alt="navbrand" width={50} height={50} className='rounded-full' />
        <a href="wa.link/5rulrl" 
        className='no-underline text-gray-900 lg:text-4xl md:text-4xl'>Contact Us</a>
        <a href="https://twitter.com/Kryptomania9?t=yorSooDP1Z1dpfODelt7Rw&s=09"
         className='no-underline text-gray-900 lg:text-4xl md:text-4xl'>Twitter</a>
        <a href="https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=" 
        className='no-underline text-gray-900 lg:text-4xl md:text-4xl'>Instagram</a>
    </div>
  )
}

export default Footer