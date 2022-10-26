import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'


const Buttons = () => {
  return (
    <div >
        <div className='flex gap-10 lg:ml-[400px] md:ml-10 ml-5 mt-10 mb-10'>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl md:text-2xl pb-2 pr-5 w-[10rem] 
            p-2 lg:text-2xl text-sm text-white'>
            <a className='no-underline text-white' href='wa.link/5rulrl'>
              <FaWhatsapp className='inline text-lime-300 md:text-2xl lg:text-2xl text-sm' /> Whatsapp
            </a>
            </button>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl md:text-2xl
             w-[10rem] p-2 pb-3 lg:text-2xl text-sm text-white'>
             <a className='no-underline text-white' href='https://twitter.com/Kryptomania9?t=yorSooDP1Z1dpfODelt7Rw&s=09'>
             <FaTwitter className='inline text-sky-300 lg:text-2xl md:text-2xl text-sm' /> Twitter
             </a>
            </button>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl 
            md:text-2xl w-[10rem] p-2 pb-3 lg:text-2xl text-sm text-white'>
                <a href='https://instagram.com/trade_with_kryptomania?igshid=YmMyMTA2M2Y=' className='no-underline text-white'>
                <BsInstagram className='inline text-pink-800 text-sm md:text-2xl lg:text-2xl' /> Instagram 
                </a>
            </button>
        </div>
      
    </div>
  )
}

export default Buttons
