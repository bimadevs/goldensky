import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X,} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    // { label: 'Services', path: '/services' },
    // { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    // { label: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            {/* <Palette className="h-8 w-8 text-sky-500" /> */}
            <img src="/images/Logo_GoldenSky.svg" alt="Logo GoldenSky" className='md:w-56 md:h-56 w-40 h-40' />
            {/* <span className="font-bold text-xl bg-gradient-to-r from-sky-500 to-yellow-500 bg-clip-text text-transparent">
              Golden Sky Design
            </span> */}
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                // className="text-gray-700 dark:text-gray-200 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                className={({ isActive }) => isActive ? "text-[#FFD700]" : "text-gray-700 dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-[#FFD700] transition-colors" }
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  // className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-sky-500 hover:text-white
                  // "
                  className={({ isActive }) => isActive ? "text-[#ffd700] block px-3 py-2 rounded-md" : "block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-[rgba(255,215,0,0.7)] hover:text-white" }
                  onClick={() => setIsOpen(false)}
                > 
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};