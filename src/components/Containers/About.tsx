import React from 'react';
import { motion } from 'framer-motion';

import FadeInBottom from '../animations/FadeInBottom';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInTop from '../animations/FadeInTop';
import StaggerChild from '../animations/StaggerChild';

const About = () => {
  return (
    <div className="h-screen flex items-center mt-20 lg:mt-0" id="about">
      <img
        src="/assets/images/bgHero.png"
        alt="background"
        className="absolute top-0 left-0 z-[-1]"
      />
      <div className=" w-full">
        <div className="container mx-auto px-4 lg:px-32">
          <div className="flex flex-col-reverse gap-5 lg:gap-0 lg:flex-row  lg:items-center justify-center mt-0 md:mt-20 lg:mt-0 ">
            <div className=" flex-1">
              <div className="flex flex-col  ">
                <motion.div
                  variants={FadeInTop}
                  initial="hidden"
                  animate="show"
                  className="px-5 py-2 border-2 border-green-400 w-32 border-solid rounded-[1000%] text-center animate-bounce "
                >
                  <h1 className="text-green-400 font-semibold bg-white">
                    <i>Welcome</i>
                  </h1>
                </motion.div>
                <motion.div
                  variants={StaggerChild}
                  initial="hidden"
                  animate="show"
                  className=" mt-5"
                >
                  <motion.h1
                    variants={FadeInLeft}
                    className="text-2xl sm:text-5xl font-bold text-black leading-normal"
                  >
                    I Have{' '}
                    <span className="text-green-500">
                      Creative <br /> Design
                    </span>{' '}
                    Experience
                  </motion.h1>
                  <motion.p
                    variants={FadeInLeft}
                    className="text-lg mt-6 leading-relaxed  "
                  >
                    I’m Tanvir, a creative Product Designer. I’ve been helping
                    businesses to solve their problems with my design for 2
                    years.
                  </motion.p>
                  <div className="flex items-center gap-3 mt-6">
                    <motion.button
                      variants={FadeInBottom}
                      className="bg-green-500 text-white px-6 py-2 rounded-md"
                    >
                      Hire Me
                    </motion.button>
                    <motion.button
                      variants={FadeInBottom}
                      className="bg-transparent border-2 border-green-500 text-green-500 px-6 py-2 rounded-md"
                    >
                      Download CV
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className=" flex lg:justify-end justify-center  items-center relative flex-1  ">
              <img
                src="/assets/images/mainHero.png"
                alt="Hero"
                className="w-3/4"
              />
              <div className="absolute flex items-center gap-3 right-[-110px] sm:right-[-100px] lg:right-[-200px] rotate-90">
                <h1 className="text-green-500 text-xs sm:text-lg">
                  Follow Me On{' '}
                </h1>
                <hr className="w-14 border-green-500" />
                <div className="  bg-green-500 rounded-md flex items-center justify-center -rotate-90 w-5 h-5 sm:w-10 sm:h-10">
                  <img
                    src="/assets/icons/instagram.png"
                    alt="instagram"
                    className="w-5"
                  />
                </div>
                <div className="  bg-green-500 rounded-md flex items-center justify-center -rotate-90 w-5 h-5 sm:w-10 sm:h-10">
                  <img
                    src="/assets/icons/facebook.svg"
                    alt="instagram"
                    className="w-5"
                  />
                </div>
                <div className="  bg-green-500 rounded-md flex items-center justify-center -rotate-90 w-5 h-5 sm:w-10 sm:h-10">
                  <img
                    src="/assets/icons/linkedin.png"
                    alt="instagram"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
