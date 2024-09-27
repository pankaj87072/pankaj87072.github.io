import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contacts';
import '../App.css';
import Links from './Links';
import download from '../download.png';
import downloadsecond from '../downloadsecond.png';
import downloadthird from '../downloadthird.png';
import SidebarIcons from './SidebarIcons';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import Cursor from './Cursor';
import backgroundimg from '../backgroundimg.png';
// import './images.jpeg'
const HomeCom = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const showSidebar = aboutInView || projectsInView || contactInView;

  return (
    <div className="w-full min-h-screen relative bg-black">
      <Cursor/>
      <Navbar />
      <div id="home" className="w-full h-screen relative overflow-hidden flex flex-col">
        <div 
          className="absolute inset-0 bg-no-repeat bg-right-top"
          style={{ 
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: 'contain',
            opacity: 0.6
          }}
        />
        <motion.div
          className="relative flex-grow flex justify-center items-center p-4 md:p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 120 }}
        >
          <div className="w-full max-w-4xl text-white text-center md:text-left z-10">
            <motion.h1
              className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Hi, there!
            </motion.h1>
            <motion.h2
              className="font-semibold text-lg sm:text-xl lg:text-2xl mb-6"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              I'm Pankaj Kumar Gupta, a Full Stack Developer
            </motion.h2>
            <motion.div
              className="links flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Links image={{ name: 'GITHUB', imageId: download, href: 'https://github.com/pankaj87072' }} />
              <Links image={{ name: 'LINKEDIN', imageId: downloadsecond, href: 'https://www.linkedin.com/in/pankaj-gupta-067279227' }} />
              <Links image={{ name: 'TWITTER', imageId: downloadthird, href: 'https://x.com/pankajg89259771' }} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div id="about" ref={aboutRef} className="px-4 md:px-8 py-16">
        <About />
      </div>
      <div id="projects" ref={projectsRef} className="px-4 md:px-8 py-16">
        <Projects />
      </div>
      <div id="contact" ref={contactRef} className="px-4 md:px-8 py-16">
        <Contact />
      </div>
      {showSidebar && (
        <>
          <SidebarIcons
            side="left"
            icons={[
              { component: <GitHub className="text-white mb-4 text-xl sm:text-2xl" />, href: 'https://github.com/pankaj87072' },
              { component: <LinkedIn className="text-white mb-4 text-xl sm:text-2xl" />, href: 'https://www.linkedin.com/in/pankaj-gupta-067279227' },
              { component: <Twitter className="text-white mb-4 text-xl sm:text-2xl" />, href: 'https://x.com/pankajg89259771' },
            ]}
          />
          <SidebarIcons
            side="right"
            icons={[
              { component: <Email className="text-white text-xl sm:text-2xl" />, href: 'mailto:pankaj0420478@gmail.com' },
              { component: <div className='rotate-90 text-teal-300 outline-none h-40 sm:h-56 flex justify-center items-center text-xs sm:text-sm' style={{ textDecoration: 'none' }}>pankaj0420478@gmail.com</div>, href: 'mailto:pankaj0420478@gmail.com' },
            ]}
          />
        </>
      )}
    </div>
  );
};


export default HomeCom;