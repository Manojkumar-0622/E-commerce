import React, { useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  
  const [search,SetSearch] = useState(false);


  return (
    <>
      <Navbar SetSearch={SetSearch}
              search={search}/>
      <Outlet context={{ search }}/>
    </>
  )
}

export default Layout