import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Homelogo from '../Homelogo.png';
import useScrollPosition from './ScrollPosition';  // Make sure the path is correct

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (scrollPosition === 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollPosition]);

  return (
    <motion.div
      className='w-full h-30 flex border border-gray-800 shadow-lg '
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
    >
      <div className='flex w-[50%] items-center justify-start ml-10 cursor-pointer '>
        <motion.div
          className='w-20 h-20 m-2 border border-solid rounded-full bg-center hover:border-dotted hover:border-gray-600'
          style={{ backgroundImage: `url(${Homelogo})` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.div>
        <motion.p
          className='font-bold text-xl text-white hover:text-gray-500'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          PANKAJ KUMAR'S
        </motion.p>
      </div>
      <div className='flex w-[50%] items-center justify-end cursor-pointer'>
        <ul className='flex m-3 font-semibold text-white'>
          <motion.li className='m-2 hover:text-gray-500' whileHover={{ scale: 1.1 }}>
            <Link to="home" smooth={true} duration={500}>HOME</Link>
          </motion.li>
          <motion.li className='m-2 hover:text-gray-500' whileHover={{ scale: 1.1 }}>
            <Link to="projects" smooth={true} duration={500}>PROJECTS</Link>
          </motion.li>
          <motion.li className='m-2 hover:text-gray-500' whileHover={{ scale: 1.1 }}>
            <Link to="experience" smooth={true} duration={500}>EXPERIENCE</Link>
          </motion.li>
          <motion.li className='m-2 hover:text-gray-500' whileHover={{ scale: 1.1 }}>
            <Link to="contact" smooth={true} duration={500}>CONTACT</Link>
          </motion.li>
          <motion.li className='px-4 py-2 rounded-md text-teal-400 text-[13px] border border-teal-300 hover:bg-teal-400 hover:text-bodyColor cursor-pointer duration-300' whileHover={{ scale: 1.1 }}>
            <a href="/Pankaj.Resume.pdf" download="Pankaj.Resume.pdf">RESUME</a>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
