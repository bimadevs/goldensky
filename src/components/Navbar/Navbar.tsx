import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
// import { ThemeToggle } from '../ThemeToggle';

// UnCommnet ThemeToggle to unlock fitur dark mode 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portofolio', path: '/portofolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50"
    >
      <div className="relative">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-sky-500 dark:bg-gray-900/70 backdrop-blur-md" />
        
        {/* Animated border gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {item.label}
                </NavLink>
              ))}
              <div className="ml-4">
                {/* <ThemeToggle /> */}
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              {/* <ThemeToggle /> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-200
                  hover:bg-white/10 transition-colors duration-200"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        <MobileMenu
          isOpen={isOpen}
          navItems={navItems}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </motion.nav>
  );
};