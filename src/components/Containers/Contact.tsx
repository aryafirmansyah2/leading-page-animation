import React from 'react';
// import { BsTelephone } from 'react-icons/bs';
// import { FiMail } from 'react-icons/fi';
// import { HiOutlineLocationMarker } from 'react-icons/hi';

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import FadeInBottom from '../animations/FadeInBottom';
import FadeInRight from '../animations/FadeInRight';
import FadeInTop from '../animations/FadeInTop';
import FadeIn from '../animations/FadeIn';
import StaggerChild from '../animations/StaggerChild';

const Contact = () => {
  return (
    <div
      className="mx-auto px-4 lg:px-32 flex items-center justify-center py-[188px]"
      id="contact"
    >
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={StaggerChild}
            animate={inView && 'show'}
            initial="hidden"
            className="flex flex-col items-center justify-center "
          >
            <div className="flex flex-col items-center justify-center gap-3 lg:w-[600px] text-center ">
              <motion.div
                variants={FadeInTop}
                className="px-5 py-2 border-2 border-green-400 w-32 border-solid rounded-[1000%] text-center "
              >
                <h1 className="text-green-400 font-semibold ">
                  <i>Contact</i>
                </h1>
              </motion.div>
              <motion.h1
                variants={FadeIn}
                className="text-2xl sm:text-5xl font-bold text-black  mt-5"
              >
                {"Let's "} Discuss Your{' '}
                <span className="text-green-500">Project</span>
              </motion.h1>
              <motion.p variants={FadeIn}>
                Let’s make something new, different and more meaningful or make
                thing more visual or conceptual
              </motion.p>
            </div>
            <div className=" items-center justify-center md:justify-start gap-5 mt-10  w-full h-full">
              <div className="flex-[2]">
                <form action="#" className="space-y-8">
                  <motion.div variants={FadeInBottom}>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                      placeholder="name@flowbite.com"
                      required
                    />
                  </motion.div>
                  <motion.div variants={FadeInBottom}>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Let us know how we can help you"
                      required
                    />
                  </motion.div>
                  <motion.div variants={FadeInBottom} className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      cols={6}
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave a comment..."
                    ></textarea>
                  </motion.div>
                  <motion.div
                    variants={FadeInRight}
                    className="flex w-full justify-end"
                  >
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
                    >
                      Send message
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Contact;
