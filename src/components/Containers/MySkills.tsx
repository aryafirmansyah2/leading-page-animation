import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import FadeInBottom from '../animations/FadeInBottom';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInRight from '../animations/FadeInRight';
import FadeInTop from '../animations/FadeInTop';
import StaggerChild from '../animations/StaggerChild';

const MySkills = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32 h-screen flex items-center justify-center">
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={StaggerChild}
            animate={inView && 'show'}
            initial="hidden"
            className="lg:flex flex-1 items-center"
          >
            <div className="flex-1 ">
              <motion.div
                variants={FadeInTop}
                className="px-5 py-2 border-2 border-green-400 w-32 border-solid rounded-[1000%] text-center animate-bounce "
              >
                <h1 className="text-green-400 font-semibold bg-white">
                  <i>My Skills </i>
                </h1>
              </motion.div>
              <motion.h1
                variants={FadeInLeft}
                className="text-2xl sm:text-5xl font-bold text-black  mt-5"
              >
                Why Hire Me For Your <br /> Next{' '}
                <span className="text-green-500">Project?</span>
              </motion.h1>
              <motion.p
                variants={FadeInLeft}
                className="text-lg mt-6 leading-relaxed  "
              >
                I’m specialist in UI/UX Designe. My passion is designing &
                solving problems through user experience and research.
              </motion.p>
              <motion.button
                variants={FadeInBottom}
                className="bg-green-500 text-white px-6 py-2 rounded-md mt-6"
              >
                Hire Me
              </motion.button>
            </div>
            <div className="flex-1 md:flex gap-10 mt-10 lg:mt-0">
              <div className="flex flex-col md:gap-10">
                <motion.div
                  variants={FadeInRight}
                  className="max-w-sm rounded  shadow-lg px-10 py-5 grid gap-2"
                >
                  <img
                    src="/assets/icons/ruby.png"
                    alt="ruby"
                    className="animate-bounce"
                  />
                  <h1 className="text-lg font-semibold">Visusal Desain</h1>
                  <p>Create user interface design with unique & modern ideas</p>
                </motion.div>
                <motion.div
                  variants={FadeInRight}
                  className="max-w-sm rounded  shadow-lg px-10 py-5 grid gap-2"
                >
                  <img
                    src="/assets/icons/hatschool.png"
                    alt="ruby"
                    className="animate-bounce"
                  />
                  <h1 className="text-lg font-semibold">Visusal Desain</h1>
                  <p>Create user interface design with unique & modern ideas</p>
                </motion.div>
              </div>
              <div className="flex items-center">
                <motion.div
                  variants={FadeInRight}
                  className="max-w-sm rounded  shadow-lg px-10 py-5 grid gap-2"
                >
                  <img
                    src="/assets/icons/statik.png"
                    alt="ruby"
                    className="animate-bounce"
                  />
                  <h1 className="text-lg font-semibold">Visusal Desain</h1>
                  <p>Create user interface design with unique & modern ideas</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default MySkills;
