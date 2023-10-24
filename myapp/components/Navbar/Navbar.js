'use client'

import React from 'react'
import logo from "../../public/logo.png"
import Logo from './Logo'
import NavLinks from './NavLinks'
const Navbar = () => {
  return (
    <header className='w-full px-4 py-8 bg-primary'
    >
        <div className='flex justify-between mx-auto max-w-screen-xl'>
        <Logo />
        <NavLinks />
        </div>
    </header>
  )
}

export default Navbar