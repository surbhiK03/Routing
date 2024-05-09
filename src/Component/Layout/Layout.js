import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Common/Header'

const Layout = () => {
 
  return (
    <>
    <div className="mainLayout">
        <Header/>
        <div className='pagelayout'>
        <Outlet/>
        </div>
    </div>
    </>
  )
}

export default Layout