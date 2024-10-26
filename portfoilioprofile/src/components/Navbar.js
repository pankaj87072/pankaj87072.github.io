import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
// import Homelogo from '../Homelogo.png';
import Navlogo from '../Navlogo.png';
import useScrollPosition from './ScrollPosition';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (scrollPosition === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollPosition]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'HOME', to: 'home' },
    { name: 'PROJECTS', to: 'projects' },
    { name: 'EXPERIENCE', to: 'experience' },
    { name: 'CONTACT', to: 'contact' },
  ];

  return (
    <motion.nav
      className='fixed w-full bg-black z-50 border border-gray-800 shadow-lg'
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <motion.div
              className='w-16 h-16 sm:w-20 sm:h-20 m-2 rounded-full bg-center bg-cover hover:border-dotted hover:border-gray-600'
              style={{ backgroundImage: `url(${Navlogo})` }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
            
          </div>
          <div className='hidden md:block'>
            <ul className='flex m-3 font-semibold text-white'>
              {navItems.map((item) => (
                <motion.li key={item.name} className='m-2 hover:text-gray-500' whileHover={{ scale: 1.1 }}>
                  <Link to={item.to} smooth={true} duration={500}>{item.name}</Link>
                </motion.li>
              ))}
              <motion.li 
                className='px-4 py-2 rounded-md text-teal-400 text-[13px] border border-teal-300 hover:bg-teal-400 hover:text-bodyColor cursor-pointer duration-300' 
                whileHover={{ scale: 1.1 }}
              >
                <a href="/PANKAJ_RESUME_.pdf" download="Pankaj.Resume.pdf">RESUME</a>
              </motion.li>
            </ul>
          </div>
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none'
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ): (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden border-t border-gray-800'>
          <ul className='px-2 pt-2 pb-3 space-y-1 sm:px-3 font-semibold text-white'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className='block px-3 py-2 rounded-md text-base hover:text-gray-500'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className='px-3 py-2'>
              <a
                href="/Pankaj_Gupta_Resume.pdf"
                download="/Pankaj_Gupta_Resume.pdf"
                className='inline-block px-4 py-2 rounded-md text-teal-400 text-[13px] border border-teal-300 hover:bg-teal-400 hover:text-bodyColor cursor-pointer duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                RESUME
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;