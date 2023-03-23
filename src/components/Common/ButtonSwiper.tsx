import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

const ButtonSwiper = () => {
  const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns  absolute z-10 top-0 right-0">
      <div className="flex gap-5 ">
        <button
          className="text-3xl px-2 py-2 bg-gray-100 rounded-full"
          onClick={() => swiper.slidePrev()}
        >
          <MdNavigateBefore />
        </button>
        <button
          className="text-3xl px-2 py-2 bg-gray-100 rounded-full"
          onClick={() => swiper.slideNext()}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default ButtonSwiper;
