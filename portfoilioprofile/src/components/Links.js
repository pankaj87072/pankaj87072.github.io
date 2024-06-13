import React from 'react';
import { Link } from '@mui/material';
const Links = ({ image }) => {
  return (
    <Link href={image.href} sx={{ textDecoration: 'none' }}>
    <div className='Links w-56 flex items-center p-4 space-x-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 m-2 transform hover:-translate-y-1 hover:scale-105'>
      <div className='w-10 h-10'>
        <img
          src={image.imageId}
          alt='icon'
          className='rounded-full border-2 border-gray-300 transition-transform duration-300 hover:scale-110'
        />
      </div>
      <div className='text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300'>
        {image.name}
      </div>
    </div>
    </Link>
  );
};

export default Links;
