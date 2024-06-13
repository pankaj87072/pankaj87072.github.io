import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Techstack from './Techstack';
import Homelogo from '../Homelogo.png';
import { Divider } from '@mui/material';

const About = () => {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [techRef, techInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [photoRef, photoInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const aboutControls = useAnimation();
  const techControls = useAnimation();
  const photoControls = useAnimation();

  React.useEffect(() => {
    if (aboutInView) {
      aboutControls.start('visible');
    } else {
      aboutControls.start('hidden');
    }
  }, [aboutControls, aboutInView]);

  React.useEffect(() => {
    if (techInView) {
      techControls.start('visible');
    } else {
      techControls.start('hidden');
    }
  }, [techControls, techInView]);

  React.useEffect(() => {
    if (photoInView) {
      photoControls.start('visible');
    } else {
      photoControls.start('hidden');
    }
  }, [photoControls, photoInView]);

  return (
    <motion.div className="flex flex-row h-fit ml-10 mr-10 pl-[8rem] pr-[8rem]">
      <motion.div
        ref={aboutRef}
        className="w-[50%] h-full"
        initial="hidden"
        animate={aboutControls}
        variants={{
          visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          hidden: { x: -10, opacity: 0 },
        }}
      >
        <div className="text-slate-300">
        <div className='text-start flex items-center content-center font-bold font-serif text-slate-300 text-[1.5rem] mb-5 mt-3'>
        <p className='w-[13rem]'>About Me</p><p className='w-full'> <Divider className="mt-4 bg-white" /></p>
        </div>
          <p className="text-start">
            Hey there! I'm Pankaj Kumar Gupta, a student at KIET Group of Institutions in Ghaziabad, India. I'm really passionate about web development and have been diving deep into JavaScript, Node.js, React, D3.js, and MongoDB. Along the way, I've been learning and mastering these technologies, coming up with cool solutions and pushing my limits. Recently, I've also started exploring new technologies that are in demand in the market, so I can stay ahead of the curve and boost my career prospects.
          </p>
        </div>
        <motion.div
          ref={techRef}
          className="text-slate-100 text-start font-bold mt-1"
          initial="hidden"
          animate={techControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
            hidden: { opacity: 0 },
          }}
        >
          Technologies I've been using recently
        </motion.div>
        <motion.div
          className="techstacks"
          initial="hidden"
          animate={techControls}
          variants={{
            visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
            hidden: { opacity: 0 },
          }}
        >
          <Techstack tech={{techhead:'Frontend',techuse:':-React    :-Tailwind    :-D3.Js'}}/>
          <Techstack tech={{techhead:'Backend',techuse:'  :-NodeJs'}} />
          <Techstack tech={{techhead:'Languages',techuse:'  :-C/C++    :-JavaScript    :-Python'}} />
        </motion.div>
      </motion.div>
      <motion.div
        ref={photoRef}
        className="ProfilePhoto w-[50%] h-[100%] flex justify-center items-center"
        initial="hidden"
        animate={photoControls}
        variants={{
          visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
          hidden: { x: 10, opacity: 0 },
        }}
      >
        <motion.div
          className="w-[17rem] h-[17rem] flex justify-center items-center"
          style={{
            perspective: '1000px',
          }}
        >
          <motion.div
            className="w-[15rem] h-[15rem] mt-[10rem] rounded-lg border border-gray-400 shadow-xl"
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
    </motion.div>
  );
};

export default About;
