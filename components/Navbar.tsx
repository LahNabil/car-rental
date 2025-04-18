'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sci } from './Sci';
import ThemeSwitch from './ThemeSwitch'; 

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full absolute z-10 bg-transparent">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={25}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center text-sm sm:text-base font-medium">
          <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/cars" className="hover:text-blue-600 transition">Cars</Link></li>
          <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1.5'}`} />
          <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1.5'}`} />
        </button>

        {/* Social Icons */}
        <div className="hidden md:flex">
          <Sci />
          <ThemeSwitch />
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md rounded-b-lg px-6 py-4 relative">
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/cars" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Cars</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition">Contact</Link></li>
          </ul>

          <div className="mt-4">
            <Sci />
          </div>

          {/* Place Theme Switch Button at the top-right corner */}
          <div className="absolute top-4 right-4">
            <ThemeSwitch />
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
