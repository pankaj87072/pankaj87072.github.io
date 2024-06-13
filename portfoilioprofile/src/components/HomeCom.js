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

const HomeCom = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const showSidebar = aboutInView || projectsInView || contactInView;

  return (
    <div className="w-full h-fit relative bg-slate-900">
      <Cursor/>
      <Navbar />
      <motion.div
        id="home"
        className="w-full h-screen flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <div className="w-[45rem] h-60 text-white">
          <motion.p
            className="font-bold text-[3rem]"
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Hi, there!
          </motion.p>
          <motion.p
            className="font-semibold text-[2rem]"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            I'm Pankaj Kumar Gupta, a Full Stack Developer
          </motion.p>
          <motion.div
            className="links font-semibold text-[2rem] flex space-x-4"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Links image={{ name: 'GITHUB', imageId: `${download}`,href: 'https://github.com/pankaj87072' }} />
            <Links image={{ name: 'LINKEDIN', imageId: `${downloadsecond}`,href: 'https://www.linkedin.com/in/pankaj-gupta-067279227' }} />
            <Links image={{ name: 'TWITTER', imageId: `${downloadthird}`,href: 'https://x.com/pankajg89259771' }} />
          </motion.div>
        </div>
      </motion.div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>
      {showSidebar && (
        <>
          <SidebarIcons
            side="left"
            icons={[
              { component: <GitHub style={{ color: 'white', marginBottom: '4px' }} />, href: 'https://github.com/pankaj87072' },
              { component: <LinkedIn style={{ color: 'white', marginBottom: '4px' }} />, href: 'https://www.linkedin.com/in/pankaj-gupta-067279227' },
              { component: <Twitter style={{ color: 'white', marginBottom: '4px' }} />, href: 'https://x.com/pankajg89259771' },
            ]}
          />
          <SidebarIcons
            side="right"
            icons={[
              { component: <Email style={{ color: 'white' }} />, href: 'mailto:pankaj0420478@gmail.com' },
              { component: <div className='rotate-90 text-teal-300 outline-none h-56 flex justify-center items-center' style={{ textDecoration: 'none' }}>pankaj0420478@gamil.com</div>, href: 'mailto:pankaj0420478@gmail.com' },
            ]}
          />
        </>
      )}
    </div>
  );
};

export default HomeCom;
