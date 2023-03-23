import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import FadeInBottom from '../animations/FadeInBottom';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInTop from '../animations/FadeInTop';
import FadeInScale from '../animations/FadeInScale';
import StaggerChild from '../animations/StaggerChild';

const Portofolio = () => {
  return (
    <div className="container mx-auto px-4  mt-20 lg:mt-0 lg:px-32  lg:h-screen mb-20 flex items-center justify-center  ">
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={StaggerChild}
            animate={inView && 'show'}
            initial="hidden"
            className="lg:flex flex-1 items-center gap-5"
          >
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left ">
              <motion.div
                variants={FadeInTop}
                className="px-5 py-2 border-2 border-green-400 w-32 border-solid rounded-[1000%] text-center animate-bounce"
              >
                <h1 className="text-green-400 font-semibold bg-white ">
                  <i>Portofolio</i>
                </h1>
              </motion.div>
              <motion.h1
                variants={FadeInLeft}
                className="text-2xl sm:text-5xl font-bold text-black  mt-5"
              >
                My Creative Works <br /> Latest{' '}
                <span className="text-green-500">Projects</span>
              </motion.h1>
              <motion.p
                variants={FadeInLeft}
                className="text-lg mt-6 leading-relaxed  "
              >
                I have selected and mentioned here some of my latest projects to
                share with you.
              </motion.p>
              <motion.button
                variants={FadeInBottom}
                className="bg-green-500 text-white px-6 py-2 rounded-md mt-6"
              >
                Show More
              </motion.button>
            </div>
            <div className=" flex-[2] mt-5 lg :mt-0">
              <div className="grid gap-5 ">
                <div className="grid md:grid-cols-2 md:grid-rows-1 gap-5">
                  <motion.img
                    variants={FadeInScale}
                    src="/assets/portofolio/1.png"
                    alt="1"
                    className="rounded-md"
                  />
                  <motion.img
                    variants={FadeInScale}
                    src="/assets/portofolio/2.png"
                    alt="1"
                    className="rounded-md"
                  />
                </div>
                <div className="grid md:grid-cols-3 md:grid-rows-1 gap-5">
                  <motion.img
                    variants={FadeInScale}
                    src="/assets/portofolio/3.png"
                    alt="1"
                    className="rounded-md"
                  />
                  <motion.img
                    variants={FadeInScale}
                    src="/assets/portofolio/4.png"
                    alt="1"
                    className="rounded-md"
                  />
                  <motion.img
                    variants={FadeInScale}
                    src="/assets/portofolio/6.jpeg"
                    alt="1"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Portofolio;
