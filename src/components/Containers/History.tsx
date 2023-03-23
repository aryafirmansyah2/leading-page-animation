import React from 'react';

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import FadeInLeft from '../animations/FadeInLeft';
import StaggerChild from '../animations/StaggerChild';

const History = () => {
  return (
    <div className=" container mx-auto px-4 lg:px-32 mt-0 mb-20 md:mb-0 md:mt-32 lg:my-0">
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={StaggerChild}
            initial="hidden"
            animate={inView && 'show'}
            className="  grid gap-5  grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 border-2 border-green-500 px-5 py-5 rounded-lg "
          >
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={FadeInLeft}
            >
              <h1 className="text-green-500 text-3xl md:text-5xl font-semibold">
                80+
              </h1>
              <h2 className="text-base md:text-2xl font-normal">
                Satisfied Client
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={FadeInLeft}
            >
              <h1 className="text-green-500 text-3xl md:text-5xl font-semibold">
                200+
              </h1>
              <h2 className="text-base md:text-2xl font-normal">
                Project Complete
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={FadeInLeft}
            >
              <h1 className="text-green-500 text-3xl md:text-5xl font-semibold">
                99+
              </h1>
              <h2 className="text-base md:text-2xl font-normal">
                Reviews Given
              </h2>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={FadeInLeft}
            >
              <h1 className="text-green-500 text-3xl md:text-5xl font-semibold">
                80+
              </h1>
              <h2 className="text-base md:text-2xl font-normal">
                Satisfied Client
              </h2>
            </motion.div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default History;
