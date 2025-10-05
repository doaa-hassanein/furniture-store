"use client"
import React, { useState } from 'react'
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  
  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openNav}/>
      <MobileNav showNav={showNav} closeNav={closeNav} />
    </div>
  )
}

export default ResponsiveNav;