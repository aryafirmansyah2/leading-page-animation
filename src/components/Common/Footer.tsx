import React from 'react';

const Footer = () => {
  return (
    <div className="container mx-auto px-4 lg:px-32">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 items-center justify-between pb-5 pt-10 border-t-[1px] border-green-500 ">
        <div>
          <h1>@ 2022. All Rights Reserved</h1>
        </div>
        <div>
          <h1>
            <i>Designed by Tanvir Ahmed</i>
          </h1>
        </div>
        <div className="flex gap-5">
          <div className="p-2 rounded-full bg-green-500">
            <img src="assets/icons/facebook.png" alt="" className="w-3" />
          </div>
          <div className="p-2 rounded-full bg-green-500">
            <img src="assets/icons/facebook.png" alt="" className="w-3" />
          </div>
          <div className="p-2 rounded-full bg-green-500">
            <img src="assets/icons/facebook.png" alt="" className="w-3" />
          </div>
          <div className="p-2 rounded-full bg-green-500">
            <img src="assets/icons/facebook.png" alt="" className="w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
