import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@mui/material';

const SidebarIcons = ({ side, icons }) => (
  <motion.div
    className={`fixed ${side ==='left'?'top-[15rem]':'top-[12rem]'}  h-full flex flex-col justify-center items-center ${side === 'left' ? 'left-[5rem]' : 'right-[5rem]'}`}
    style={{
      transform: side === 'left' ? 'translateX(-50%)' : 'translateX(50%)',
      opacity: 0
    }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
  >
    {icons.map((icon, index) => (
      <Link key={index} href={icon.href} sx={{ textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" className="mb-4">
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          {icon.component}
        </motion.div>
      </Link>
    ))}
    <div className={`${side ==='left'?'h-[40%]':'h-[30%]'} border border-gray-300`}></div>
  </motion.div>
);

export default SidebarIcons;
