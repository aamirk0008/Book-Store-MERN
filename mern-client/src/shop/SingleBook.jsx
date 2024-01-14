import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, bookTitle, imageURL, bookDescription, authorName} = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24 flex justify-around items-center'>
      <img src={imageURL} alt={bookTitle} className='h-96'/>
    <div className='flex flex-col items-start justify-start h-full'>
      <h2 className='text-4xl font-bold '>{bookTitle}</h2>
      <p>{bookDescription}</p>
      <h1 className='text-2xl italic font-bold text-red-500'>{authorName}</h1>
      </div>
    </div>
  )
}

export default SingleBook