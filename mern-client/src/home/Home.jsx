import React from 'react'
import Banner from '../components/Banner'
import FavoriteBooks from './FavoriteBooks'
import PromoCode from './PromoCode'
import CustomerReview from './CustomerReview'

const Home = () => {
  return (
    <div>
        <Banner/>
        <FavoriteBooks/>
        <PromoCode/>
        <CustomerReview/>
    </div>
  )
}

export default Home
