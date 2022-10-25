import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';

const Buttons = () => {
  return (
    <div className='' >
        <div className='flex gap-10 lg:ml-[500px] ml-20 mt-20 mb-20'>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl pb-2 pr-5 w-[10rem] p-2 text-2xl text-white'>
            <FaWhatsapp className='inline text-lime-300 text-2xl' /> Whatsapp
            </button>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl w-[10rem] p-2 pb-3 text-2xl text-white'>
                <FaTwitter className='inline text-sky-300 text-2xl' /> Twitter
            </button>
            <button className='bg-blue-600 hover:bg-orange-500 rounded-2xl w-[10rem] p-2 pb-3 text-2xl text-white'>
                <BsInstagram className='inline text-pink-800 text-2xl' /> Instagram
            </button>
        </div>
      
    </div>
  )
}

export default Buttons
