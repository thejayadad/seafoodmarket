'use client'

import React from 'react'
import hero from "../../public/hero.png"
import Image from 'next/image'


const Hero = () => {
  return (
    <section className='mx-auto max-w-screen-xl'>
        <Image 
        src={hero}
        height={1000}
        width={1500}
        />
    </section>
  )
}

export default Hero