'use client'

import React from 'react';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Logo = () => {
  return (
    <div>
      <Image src={logo} height={140} width={100} alt="Logo" />
    </div>
  );
};

export default Logo;
