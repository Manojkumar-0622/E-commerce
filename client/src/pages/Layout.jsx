import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';

const Layout = () => {

  
  const [search,SetSearch] = useState(false);


  return (
    <>
      <Navbar SetSearch={SetSearch}
              search={search}/>
        <Outlet context={{ search }}/>
      <Footer />
    </>
  )
}

export default Layout