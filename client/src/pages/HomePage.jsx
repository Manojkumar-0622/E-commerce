import React from 'react'
import MainScreen from '../components/MainScreen'
import { newArrival,futueItem }  from '../assets/assets.js'
import NewArrivals from '../components/NewArrivals.jsx'
import ShopBySection from '../components/ShopBySection.jsx'
import HomeBanner from '../components/HomeBanner.jsx'

export const HomePage = () => {

  return (
    <>
        <MainScreen />
        <ShopBySection />
        <NewArrivals dummayArrival={newArrival} 
                     title={'New Arrivals'}/>
        <HomeBanner />
        <NewArrivals dummayArrival={futueItem}
                     title={'Featured Items'}/>

        
    </>
  )
}
