import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from "../assets/theme-images/promo.png"

const PromoCode = () => {
  return (
    <div className='mt-15 py-10 bg-red-200 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-3xl font-bold mb-5 leading-snug'>Become a Subscriber and get additional Discounts on books</h2>
                <Link to="/shop" className='block'><button className='bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
            </div>

            <div>
                <img src={bookPic} alt="" className='w-96'/>
            </div>
        </div>
    </div>
  )
}

export default PromoCode