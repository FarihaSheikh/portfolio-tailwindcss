"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseSharp } from 'react-icons/io5';

function Navbar(){
  const [menu, setMenu] = useState(false);

  const navItems = [
    { id: 1, text: 'HOME', href: '/' },
    { id: 2, text: 'ABOUT', href: '/about' },
    { id: 3, text: 'SERVICES', href: '/services' },
    { id: 4, text: 'SKILLS', href: '/skills' },
    { id: 5, text: 'PROJECTS', href: '/projects' },
    { id: 6, text: 'CONTACT', href: '/contact' },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <Image src="/images/heroImage.png" className="h-12 w-12 rounded-full" alt="logo image" width={100} height={100} />
            <h1 className="font-semibold text-xl cursor-pointer">
              Farih<span className="text-rose-400 text-2xl">a</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, href }) => (
                <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                  <Link href={href}>{text}</Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className='bg-white'>
            <ul className="md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl">
              {navItems.map(({ id, text, href }) => (
                <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                  <Link onClick={() => setMenu(!menu)} href={href}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
