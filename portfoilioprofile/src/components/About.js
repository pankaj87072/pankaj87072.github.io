import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Techstack from './Techstack';
import Homelogo from '../Homelogo.png';
import { Divider } from '@mui/material';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col mx-4 sm:mx-8 md:mx-10 px-4 sm:px-8 md:px-16 lg:px-32"
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0 },
      }}
    >
      <div className="text-slate-300">
        <div className='text-start flex items-center content-center font-bold font-serif text-slate-300 text-xl sm:text-2xl mb-5 mt-3'>
          <p className='w-32 sm:w-40'>About Me</p>
          <p className='w-full'><Divider className="mt-4 bg-white" /></p>
        </div>

        {/* Profile Photo for smaller screens */}
        <motion.div
          className="ProfilePhoto w-full md:hidden flex justify-center items-center mb-8"
          variants={{
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
            hidden: { y: 10, opacity: 0 },
          }}
        >
          <motion.div
            className="w-48 h-48 sm:w-64 sm:h-64 flex justify-center items-center"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-lg border border-gray-400 shadow-xl"
              style={{
                transformStyle: 'preserve-3d',
                boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)',
              }}
              whileHover={{
                rotateX: 0,
                rotateY: 0,
                boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.4)',
              }}
            >
              <motion.img
                className="w-full h-full rounded-lg"
                src={Homelogo}
                alt="Logo"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <p className="text-start text-sm sm:text-base">
              Hey there! I'm Pankaj Kumar Gupta, a student at KIET Group of Institutions in Ghaziabad, India. I'm really passionate about web development and have been diving deep into JavaScript, Node.js, React, D3.js, and MongoDB. Along the way, I've been learning and mastering these technologies, coming up with cool solutions and pushing my limits. Recently, I've also started exploring new technologies that are in demand in the market, so I can stay ahead of the curve and boost my career prospects.
            </p>

            <div className="text-slate-100 text-start font-bold mt-4 text-sm sm:text-base">
              Technologies I've been using recently
            </div>
            <div className="techstacks">
              <Techstack tech={{techhead:'Frontend',techuse:':-React    :-Tailwind    :-D3.Js'}}/>
              <Techstack tech={{techhead:'Backend',techuse:'  :-NodeJs'}} />
              <Techstack tech={{techhead:'Languages',techuse:'  :-C/C++    :-JavaScript    :-Python'}} />
            </div>
          </div>

          {/* Profile Photo for larger screens */}
          <motion.div
            className="ProfilePhoto hidden md:flex w-1/2 justify-center items-center"
            variants={{
              visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
              hidden: { y: 10, opacity: 0 },
            }}
          >
            <motion.div
              className="w-64 h-64 lg:w-72 lg:h-72 flex justify-center items-center"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-56 h-56 lg:w-60 lg:h-60 rounded-lg border border-gray-400 shadow-xl"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.2)',
                }}
                whileHover={{
                  rotateX: 0,
                  rotateY: 0,
                  boxShadow: '20px 20px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <motion.img
                  className="w-full h-full rounded-lg"
                  src={Homelogo}
                  alt="Logo"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
