import { NAV_LINKS } from '/Users/corneliakarnekull/Desktop/corneliasportfolio/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween mx-auto max-w-[1440px] px-4 md:px-10 3xl:px-0 relative z-20 py-3'>
      {/* Logo */}
      <Link href="/">
        <h1 className='font-bodoni text-xl font-bold font-style: italic; text-perfectpurple'>CK</h1>
      </Link>

      {/* Navigation Links */}
      <ul className='font-bodoni text-lg hidden h-full gap-12 md:flex font-style: italic; text-perfectpurple'>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href}
                className="hover:underline flex items-center justify-center; transition-all">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='font-bodoni text-lg md:hidden h-full gap-12 font-style: italic; text-perfectpurple'>
        MENU
      </ul>
    </nav>
  )
}

export default Navbar;

