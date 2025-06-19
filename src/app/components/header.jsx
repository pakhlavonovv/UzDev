'use client';

import './style.css';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-[#7C67FE] relative z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div>
            <Link
              href="/"
              className="font-bold text-white text-[40px] md:text-[45px]"
            >
              UzDev
            </Link>
          </div>
          <div className="hidden items-center gap-4 text-white md:flex">
            <Link href="/" className="hover:text-gray-300">
              Asosiy sahifa
            </Link>
            <Link href="/courses" className="hover:text-gray-300">
              Kurslar
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Bog'lanish
            </Link>
            <Link
              href="/category"
              className="bg-[#F5613F] px-6 py-2 rounded-md border-[1px] border-[#F5613F] transition-colors hover:bg-transparent"
            >
              Kategorya
            </Link>
          </div>
          <button
            className="text-white md:hidden"
            onClick={toggleSidebar}
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>
      </header>

      <div
        className={`z-50 fixed top-0 left-0 h-full w-[250px] bg-[#7C67FE] shadow-lg transform transition-transform duration-300 ease-in-out  ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white"
            onClick={toggleSidebar}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
        <nav className="flex flex-col items-start px-6 gap-4 text-white">
          <Link href="/" onClick={toggleSidebar} className="hover:text-gray-300">
            Asosiy sahifa
          </Link>
          <Link href="/courses" onClick={toggleSidebar} className="hover:text-gray-300">
            Kurslar
          </Link>
          <Link href="/contact" onClick={toggleSidebar} className="hover:text-gray-300">
            Bog'lanish
          </Link>
          <Link
            href="/category"
            onClick={toggleSidebar}
            className="hover:text-gray-300"
          >
            Kategorya
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
