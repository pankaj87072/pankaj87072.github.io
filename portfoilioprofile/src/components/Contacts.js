import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import contactimg from '../contactimg.png';
import { Divider } from '@mui/material';
import emailjs from '@emailjs/browser';

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
      className='w-full flex justify-center pl-[8rem] pr-[8rem]'
      initial='hidden'
      animate={controls}
      variants={{
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
      }}
    >
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          Message sent successfully!
        </div>
      )}
      <motion.div
        className="w-fit h-auto mx-12 mt-6 rounded overflow-hidden shadow-lg"
        initial='hidden'
        animate={controls}
        variants={{
          visible: { opacity: 1, transition: { duration: 1, delay: 0.25 } },
          hidden: { opacity: 0 },
        }}
      >
        <div className='text-start flex items-center content-center font-bold font-serif text-slate-300 text-[1.5rem] mb-5 mt-3'>
          <p className='w-[13rem]'> Contact Me</p>
          <p className='w-full'> <Divider className="mt-4 bg-white" /></p>
        </div>
        <div className="text-center font-serif font-extrabold text-4xl text-slate-300">Let's Connect!</div>
        <div className="border border-solid bordercolor rounded-md p-6">
          <form ref={form} onSubmit={sendEmail}>
            <div className="inputs flex">
              <div className="w-1/2 pr-4">
                <div className="punchline mb-2 font-serif font-bold text-2xl text-slate-300 min-h-16">
                  Let's collaborate<br />
                  <p className="text-4xl">And create wonders!</p>
                </div>
                <div className="flex flex-col items-center">
                  <motion.input
                    className="mb-2 w-full px-1 py-1 border bordercolor bg-slate-500 h-12 m-2"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    initial='hidden'
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
                      hidden: { opacity: 0 },
                    }}
                  />
                  <motion.input
                    className="mb-2 w-full px-1 py-1 border bordercolor bg-slate-500 h-12 m-2"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    initial='hidden'
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.7 } },
                      hidden: { opacity: 0 },
                    }}
                  />
                  <motion.textarea
                    className="mb-2 w-full px-1 py-1 border bordercolor bg-slate-500 h-32 m-2"
                    name="message"
                    placeholder="Message"
                    initial='hidden'
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
                      hidden: { opacity: 0 },
                    }}
                  />
                  <motion.input
                    type='submit'
                    value='Send'
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-400 cursor-pointer"
                    initial='hidden'
                    animate={controls}
                    variants={{
                      visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.1 } },
                      hidden: { scale: 0.8, opacity: 0 },
                    }}
                  />
                </div>
              </div>
              <div className="w-1/2 mx-2 flex items-center justify-center">
                <motion.img
                  className='border border-solid bordercolor rounded-md w-[15rem] h-[15rem] mt-14'
                  src={contactimg}
                  alt='Contact'
                  initial='hidden'
                  animate={controls}
                  variants={{
                    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 1.3 } },
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
