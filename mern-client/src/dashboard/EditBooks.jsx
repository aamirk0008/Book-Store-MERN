import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams()
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL} = useLoaderData()
  

  const bookCategories = [
    "Fantasy",
    "Horror",
    "Romance",
    "Fiction",
    "Science-Fiction",
    "Bibliography",
    "Autobiography",
    "History",
    "Business",
    "Memoir",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) =>{
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  // handle Book Submission
  const handleUpdate = (event) => {
    event.preventDefault()
    const form = event.target

    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const category = form.category.value
    const bookDescription = form.bookDescription.value
    const bookPdfURL = form.bookPdfURL.value

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
    }
    // console.log(bookObj);
    // Update book data
    fetch(`http://localhost:8000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Updated Successfully")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/*Row-1*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput defaultValue={bookTitle} name='bookTitle' id="bookTitle" type="text" placeholder="Enter Book name" required />
        </div>
      {/* Author */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput defaultValue={authorName} name='authorName' id="authorName" type="text" placeholder="Enter Author name" required />
        </div>
      </div>
      {/* Row-2 */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput defaultValue={imageURL} name='imageURL' id="imageURL" type="text" placeholder="Enter Image URL" required />
        </div>
      {/* Category */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <select name="category" id="inputState" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </select>
        </div>
      </div>

      {/* Book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea defaultValue={bookDescription} name='bookDescription' className='w-full' id="bookDescription" placeholder="Enter your book Description....." required rows={5} />
      </div>

      {/* Book PDF URL */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Your PDF URL" />
        </div>
        <TextInput defaultValue={bookPdfURL} name='bookPdfURL' id="bookPdfURL" type="text" placeholder="Enter Book PDF URL" required />
      </div>

      <Button type="submit">Update Book</Button>
    </form>
    </div>
  )
}

export default EditBooks