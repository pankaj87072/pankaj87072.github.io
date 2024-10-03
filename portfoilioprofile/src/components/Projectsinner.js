import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LiveIcon from '@mui/icons-material/Launch';

// import TechStackused from './TechStackused'; // Import the TechStack component

const Projectsinnercomp = ({ shift }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={`flex ${shift.dis} w-full justify-center my-8 lg:my-12`}>
      <motion.div
        ref={ref}
        className={`flex ${shift.end} items-center w-full lg:w-1/2`}
        initial={{ x: '0', opacity: 0 }}
        animate={{
          x: shift.shifting ? (isInView ? '0%' : '-2%') : (isInView ? '0%' : '2%'),
          opacity: isInView ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <img className='rounded-md w-full lg:w-[60%] h-auto' src={shift.pro} alt='projectimage'/>
      </motion.div>
      <motion.div
        className={`projectdetails w-full lg:w-1/2 text-slate-300 text-base sm:text-lg mt-4 lg:mt-0`}
        initial={{ x: '0', opacity: 0 }}
        animate={{
          x: shift.shifting ? (isInView ? '0%' : '2%') : (isInView ? '0%' : '-2%'),
          opacity: isInView ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <div className='name text-center lg:text-end font-semibold lg:pr-4 mb-2'>{shift.name}</div>
        <div className={`flex flex-col ${shift.disend}`}>
          <div className={`border border-solid border-teal-300 rounded-md p-4 ${shift.dism}`} style={{backgroundColor:'rgb(17 34 64)'}}>
            {shift.description}
          </div>
          {shift.tech}
          <div className='flex justify-center lg:justify-end mt-2 lg:mr-4'>
            <a href='https://github.com' className='pr-2 text-blue-500 hover:underline'><GitHubIcon /></a>
            <a href='https://live-link.com' className='text-blue-500 hover:underline'><LiveIcon /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projectsinnercomp;
