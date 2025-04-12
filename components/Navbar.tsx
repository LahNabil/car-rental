'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sci } from './Sci';

const NavBar = () => (
  <header className='w-full absolute z-10 bg-transparent'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
      
      {/* Logo */}
      <Link href='/' className='flex items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={120}
          height={25}
          className='object-contain'
        />
      </Link>

      <div>
      <ul className='flex gap-8 items-center text-sm sm:text-base font-medium'>
      <li>
          <Link href='/' className='hover:text-blue-600 transition'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/cars' className='hover:text-blue-600 transition'>
            Cars
          </Link>
        </li>
        <li>
          <Link href='/about' className='hover:text-blue-600 transition'>
            About Us
          </Link>
        </li>
        <li>
          <Link href='/contact' className='hover:text-blue-600 transition'>
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div>
        <Sci/>
      </div>
    </nav>
  </header>
);

export default NavBar;
