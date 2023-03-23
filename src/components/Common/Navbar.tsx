import { headerNavLink } from '@/data/headerNavLink';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScroll, setCurrentScrollPos] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 50);
    setCurrentScrollPos(currentScrollPos > 50);

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll, currentScroll]);

  return (
    <nav
      className={`${visible ? 'h-auto opacity-100 ' : ' opacity-0 h-0 mt-0'} ${
        currentScroll ? 'bg-white ' : 'bg-transparent'
      } z-50 fixed w-full top-0`}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto lg:px-32">
        <a href="https://flowbite.com/" className="flex items-center">
          <div className="w-16 h-16 rounded-full bg-red-500">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="object-cover object-center w-full h-full rounded-full"
            />
          </div>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Download CV
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto
        md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            {headerNavLink?.map((item: any, i: number) => (
              <li key={i}>
                <Link
                  to={item.ref}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-black bg-blue-700 rounded md:bg-transparent  md:p-0 cursor-pointer "
                  aria-current="page"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
