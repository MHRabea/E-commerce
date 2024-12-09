import Hero from '../Components/Hero/Hero';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';
import React from 'react'

const Shop = () => {
  return (
    <div className='flex items-center justify-center flex-col w-screen'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
