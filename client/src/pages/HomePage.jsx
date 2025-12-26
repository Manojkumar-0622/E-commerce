import React from 'react'
import MainScreen from '../components/MainScreen'
import ShopBySection from './ShopBySection'
import NewArrivals from './NewArrivals'
import { newArrival }  from '../assets/assets.js'

export const HomePage = () => {

  return (
    <>
        <MainScreen />
        <ShopBySection />
        <NewArrivals dummayArrival={newArrival} 
                     title={'New Arrivals'}/>
    </>
  )
}
