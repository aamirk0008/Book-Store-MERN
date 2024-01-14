import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';
const Shop = () => {
  const [books, setBooks] = useState([])

  useEffect(() =>{
    fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data))
  }, [])
  return (
    <div className='mt-28 px-4 lg:px-24'>
       <h2 className='text-4xl font-bold text-center'>All Books are here</h2>

       <div className='grid gap-8 my-10 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book => <Card
            className="max-w-sm"
          >
            <img src={book.imageURL} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.bookDescription}
            </p>
            <button className='bg-red-700 font-semibold text-white py-2 rounded'>Rent Now</button>
          </Card>)
        }
       </div>
    </div>
  )
}

export default Shop