'use client'
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Import the shopping cart icon

const links = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Onlineorder', url: '/order' },
];

const NavLinks = () => {
  return (
    <nav className="flex items-center space-x-6">
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <span className="hover:underline">{link.text}</span> {/* Change </a> to </span> */}
        </Link>
      ))}
      <Link href="/cart">
        <span className="hover:underline flex items-center space-x-2">
          <FaShoppingCart size={24} color="gray" />
        </span>
      </Link>
    </nav>
  );
};

export default NavLinks;
