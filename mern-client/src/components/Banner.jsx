import React from 'react'
import { FaSearchengin } from 'react-icons/fa6'
import Slider from '../home/Slider'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-red-200 flex items-center'>
        <div className='flex flex-col md:flex-row justify-around items-center gap-12 py-24 w-full'>
            {/* left side */}
            <div className='md:w-1/2 space-y-7 h-full'>
                <h2 className='text-4xl font-bold leading-snug text-black'>Rent any Book online.<span className='text-red-500 italic '>Get delivered at home</span></h2>
                <p className='md:w-4/5'>Hey Folks!, Introducing user-friendly <span className='font-bold hover:italic cursor-pointer'>Online Library</span> Management System app! Seamlessly manage your library's inventory, track book availability, streamline checkouts and returns, and empower patrons with easy access to a vast collection of books</p>
                <div>
                    <input type="search" name='search' id='search' className='py-2 px-2 rounded-s-sm outline-none' placeholder='Enter Book name'/>
                    <button className='px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 bg-red-700'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div><Slider/></div>
        </div>
    </div>
  )
}

export default Banner