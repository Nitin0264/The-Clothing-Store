import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import ProductItem from '../components/ProductItem'
import BestSeller from '../components/BestSeller'
import BentoPage from './BentoPage'

function Home() {
  return (
    <div className = 'mt-[26px]'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <BentoPage />
      
    </div>
  )
}

export default Home