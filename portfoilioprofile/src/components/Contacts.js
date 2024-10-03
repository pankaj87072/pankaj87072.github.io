import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactimg from '../person.avif';
import { Divider } from '@mui/material';
import emailjs from '@emailjs/browser';
// import { Contact as ContactIcon } from 'lucide-react';
const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const form = useRef();
  const [notification, setNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8mqq50p', 'template_2q98zbp', form.current, 'BuEmPQqibFVhzZKwe')
      .then(
        () => {
          console.log('SUCCESS!');
          setNotification(true);
          setTimeout(() => {
            setNotification(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className='w-full flex justify-center px-4 sm:px-6 lg:px-8'
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
    >
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded z-50">
          Message sent successfully!
        </div>
      )}
      <motion.div
        className="w-full max-w-4xl mx-auto mt-6 rounded-lg overflow-hidden shadow-lg bg-black"
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
          hidden: { opacity: 0 },
        }}
      >
        <div className='text-start flex flex-col sm:flex-row items-center font-bold font-serif text-slate-300 text-xl sm:text-2xl p-4 sm:p-6'>
          <p className='w-full sm:w-auto mb-2 sm:mb-0 sm:mr-4'>Contact Me</p>
          <Divider className="w-full bg-white" />
        </div>
        <div className="text-center font-serif font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-300 mb-4">Let's Connect!</div>
        <div className="border border-solid border-slate-600 rounded-md p-4 sm:p-6">
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="lg:hidden w-full flex justify-center items-center mb-6">
                <motion.img
                  className='rounded-md w-full max-w-xs object-cover'
                  src={contactimg}
                  alt='Contact'
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
                    hidden: { scale: 0.8, opacity: 0 },
                  }}
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="punchline font-serif font-bold text-xl sm:text-2xl text-slate-300">
                  Let's collaborate<br />
                  <p className="text-2xl sm:text-3xl">And create wonders!</p>
                </div>
                <motion.input
                  className="w-full px-3 py-2 border border-slate-600 rounded bg-slate-700 text-white"
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
                    hidden: { opacity: 0 },
                  }}
                />
                <motion.input
                  className="w-full px-3 py-2 border border-slate-600 rounded bg-slate-700 text-white"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
                    hidden: { opacity: 0 },
                  }}
                />
                <motion.textarea
                  className="w-full px-3 py-2 border border-slate-600 rounded bg-slate-700 text-white h-32"
                  name="message"
                  placeholder="Message"
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, transition: { duration: 0.5, delay: 1.1 } },
                    hidden: { opacity: 0 },
                  }}
                />
                <motion.input
                  type='submit'
                  value='Send'
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 cursor-pointer transition duration-300"
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.3 } },
                    hidden: { scale: 0.8, opacity: 0 },
                  }}
                />
              </div>
              <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
                <motion.img
                  className='rounded-md w-full max-w-sm object-cover'
                  src={contactimg}
                  alt='Contact'
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.5 } },
                    hidden: { scale: 0.8, opacity: 0 },
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;