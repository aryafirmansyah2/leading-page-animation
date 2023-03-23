import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import FadeInBottom from '../animations/FadeInBottom';
import FadeInLeft from '../animations/FadeInLeft';
import FadeInTop from '../animations/FadeInTop';
import StaggerChild from '../animations/StaggerChild';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import ButtonSwiper from '../Common/ButtonSwiper';

const Reviews = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32 h-[80vh]  ">
      <InView>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            variants={StaggerChild}
            animate={inView && 'show'}
            initial="hidden"
            className="lg:flex flex-col flex-1  gap-5"
          >
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left ">
              <motion.div
                variants={FadeInTop}
                className="px-5 py-2 border-2  border-green-400 w-32 border-solid rounded-[1000%] text-center "
              >
                <h1 className="text-green-400 font-semibold ">
                  <i>Reviews</i>
                </h1>
              </motion.div>
              <motion.h1
                variants={FadeInLeft}
                className="text-2xl sm:text-5xl font-bold text-black  mt-5"
              >
                Our Customer Say <br />
                Something <span className="text-green-500">About Us</span>
              </motion.h1>
            </div>
            <div className="mt-10 relative">
              <Swiper
                breakpoints={{
                  576: {
                    // width: 576,
                    slidesPerView: 1,
                  },
                  768: {
                    // width: 768,
                    slidesPerView: 2,
                  },
                  1024: {
                    // width: 1024,
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={30}
                className="mySwiper relative "
              >
                <ButtonSwiper />
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/736x/fd/61/49/fd6149898f19f49db5dda4d920796fad.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/42/85/19/428519723b5e7cd3e9d5c890f229bed5.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/da/f4/44/daf44452bfba874881b0ca2345a76eba.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/00/52/0e/00520e9ca3d0128c4ce6b2a12944adaa.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/736x/fd/61/49/fd6149898f19f49db5dda4d920796fad.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/42/85/19/428519723b5e7cd3e9d5c890f229bed5.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/da/f4/44/daf44452bfba874881b0ca2345a76eba.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                  <motion.div variants={FadeInBottom} className="  h-full ">
                    <div className=" w-full ">
                      <div className="pt-32 ">
                        <div className="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 w-max-[500px]">
                          <div className="w-full pt-1 pb-5">
                            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                              <img
                                src="https://i.pinimg.com/564x/00/52/0e/00520e9ca3d0128c4ce6b2a12944adaa.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="w-full mb-10">
                            <div className="text-3xl text-green-500 text-left leading-tight h-3">
                              “
                            </div>
                            <p className="text-sm text-gray-600 text-center px-5">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Nam obcaecati laudantium
                              recusandae, debitis eum voluptatem ad, illo
                              voluptatibus temporibus odio provident.
                            </p>
                            <div className="text-3xl text-green-500 text-right leading-tight h-3 -mt-3">
                              ”
                            </div>
                            <div className="w-full">
                              <p className="text-md text-green-500 font-bold text-center">
                                Scott Windon
                              </p>
                              <p className="text-xs text-gray-500 text-center">
                                @scott.windon
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              </Swiper>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default Reviews;
