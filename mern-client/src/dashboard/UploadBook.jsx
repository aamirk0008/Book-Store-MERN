import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
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
  const handleBookSubmit = (event) => {
    event.preventDefault()
    const form = event.target

    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const category = form.category.value
    const bookDescription = form.bookDescription.value
    const bookPdfURL = form.bookPdfURL.value

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
    }
    console.log(bookObj);

    //Send data to database
    fetch("http://localhost:8000/upload-book",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      alert("Your Book uploaded successfully!!!!")
      form.reset()
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/*Row-1*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput name='bookTitle' id="bookTitle" type="text" placeholder="Enter Book name" required />
        </div>
      {/* Author */}
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput name='authorName' id="authorName" type="text" placeholder="Enter Author name" required />
        </div>
      </div>
      {/* Row-2 */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
        <TextInput name='imageURL' id="imageURL" type="text" placeholder="Enter Image URL" required />
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
        <Textarea name='bookDescription' className='w-full' id="bookDescription" placeholder="Enter your book Description....." required rows={5} />
      </div>

      {/* Book PDF URL */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Your PDF URL" />
        </div>
        <TextInput name='bookPdfURL' id="bookPdfURL" type="text" placeholder="Enter Book PDF URL" required />
      </div>

      <Button type="submit">Upload Book</Button>
    </form>
    </div>
  )
}

export default UploadBook