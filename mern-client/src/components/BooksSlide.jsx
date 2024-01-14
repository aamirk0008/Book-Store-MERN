import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './BooksSlide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { FaCartArrowDown } from 'react-icons/fa6'

const BooksSlide = ({headline, books}) => {
    // console.log(books);
  return (
    <div className='my-10 px-4 lg:px-24'>
        <h2 className='text-4xl text-center font-bold text-black my-5'>{headline}</h2>

        {/* cards */}
        <div className='mt-10'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full h-full books"
      >
        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to={`/book/${book._id}`}>
                    <div className='relative'>
                        <img src={book.imageURL} alt="" />
                        <div className='absolute bottom-5 right-5 bg-red-800 hover:bg-black p-2 rounded'>
                          <FaCartArrowDown className='w-4 h-4 text-white'/>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-center font-bold text-1.5xl'>{book.bookTitle}</h3>
                    </div>
                    <div>
                        <p>$5.00</p>
                    </div>
                </Link>
              </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BooksSlide