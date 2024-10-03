import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub
const SidebarIcons = ({ side, icons, allMobileIcons,isomepage }) => {
  
  // Separate component for mobile view - always on left
  const MobileIcons = () => (
    <motion.div
      className="fixed md:hidden flex bottom-4 left-4"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="flex gap-4">
        {allMobileIcons.map((icon, index) => (
          <Link 
            key={index} 
            href={icon.href} 
            sx={{ textDecoration: 'none' }} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              {icon.component}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  // Original desktop component
  const DesktopIcons = () => (
    <motion.div
      className={`fixed hidden md:flex ${side === 'left' ? 'top-[15rem]' : 'top-[12rem]'} h-full flex-col justify-center items-center ${side === 'left' ? 'left-[5rem]' : 'right-[5rem]'}`}
      style={{
        transform: side === 'left' ? 'translateX(-50%)' : 'translateX(50%)',
        opacity: 0
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {icons.map((icon, index) => (
        <Link 
          key={index} 
          href={icon.href} 
          sx={{ textDecoration: 'none' }} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mb-4"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
            {icon.component}
          </motion.div>
        </Link>
      ))}
      <div className={`${side === 'left' ? 'h-[40%]' : 'h-[30%]'} border border-gray-300`}></div>
    </motion.div>
  );

  return (
    <>
      {side === 'left' && <MobileIcons />}
      <DesktopIcons />
    </>
  );
};
export default SidebarIcons;
