import React, { useEffect, useState } from 'react'
import BooksSlide from '../components/BooksSlide'

const FavoriteBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() =>{
        fetch("http://localhost:8000/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 10)))
    }, [])
  return (
    <div>
        <BooksSlide books={books} headline="Reader's Top choice"/>
    </div>
  )
}

export default FavoriteBooks