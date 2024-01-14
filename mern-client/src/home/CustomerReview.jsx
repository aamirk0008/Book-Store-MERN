import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Customer.css';

// Avatar
import { Avatar } from 'flowbite-react';
// import { proPic} from "../assets/customerReview/cst2.jpg"
// Icons
import {FaStar} from "react-icons/fa6"

// import required modules
import { Pagination } from 'swiper/modules';

const CustomerReview = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-10 leading-snug'>Our Customer Reviews</h2>

        {/* Review Cards */}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper review w-full py-10"
      >
        <SwiperSlide className='shadow-2xl bg-white md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>Alex Jones</h4>
                    <p className='text-base'>CMO, Boat</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>Sheikh Aamir</h4>
                    <p className='text-base'>SDE-1, Amazon</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>Forex singh</h4>
                    <p className='text-base'>FSD, Google</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>Sam Billings</h4>
                    <p className='text-base'>CFO, HclTech</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>PaaJi Burger</h4>
                    <p className='text-base'>CTO, Amazon</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className='text-amber-500 gap-2 flex'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Review text */}
                <div className='mt-7'>
                    <p className='text-small py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.</p>
                    <Avatar img="" alt="avatar of Jese" rounded className='w-10 mb-4 text-center mx-auto'/>
                    <h4 className='text-lg font-medium'>Sam stark</h4>
                    <p className='text-base'>King, WinterFell</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default CustomerReview