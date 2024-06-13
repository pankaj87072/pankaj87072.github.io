import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { style } from 'd3';
// import TechStackused from './TechStackused'; // Import the TechStack component

const Projectsinnercomp = ({ shift }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className={`flex ${shift.dis} w-60% justify-center m-12  `}>
      <motion.div
        ref={ref}
        className={`flex ${shift.end} items-center w-[50%]`}
        initial={{ x: '0', opacity: 0 }}
        animate={{
          x: shift.shifting ? (isInView ? '0%' : '-2%') : (isInView ? '0%' : '2%'),
          opacity: isInView ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <img className=' rounded-md w-[70%] h-[100%]' src={shift.pro} alt='projectimage'/>
      </motion.div>
      <motion.div
        className={`projectdetails w-[50%] text-slate-300  text-lg`}
        initial={{ x: '0', opacity: 0 }}
        animate={{
          x: shift.shifting ? (isInView ? '0%' : '2%') : (isInView ? '0%' : '-2%'),
          opacity: isInView ? 1 : 0
        }}
        transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
      >
        <div className='name text-end font-semibold pr-4'>{shift.name}</div>
        <div className={`flex flex-col ${shift.disend}`}>
          <div className={`border border-solid border-teal-300 rounded-md p-4 ${shift.dism}`} style={{backgroundColor:'rgb(17 34 64)'}}>
            {shift.description}
          </div>
          {shift.tech} {/* Pass the array of technologies to the TechStack component */}
          <div className='flex justify-end mt-2 mr-4'>
            <a href='https://github.com' className='pr-2 text-blue-500 hover:underline'><GitHubIcon /></a>
            <a href='https://live-link.com' className='text-blue-500 hover:underline'><LaunchIcon /></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projectsinnercomp;
