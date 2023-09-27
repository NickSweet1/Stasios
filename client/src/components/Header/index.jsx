import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../../assets/LogoStasios.png';
import BannerMap from '../../assets/BannerMap.jpg';

// Define an array of navigation links
const links = [
  {
    id: 1,
    link: 'About',
  },
  {
    id: 2,
    link: 'Menu',
  },
  {
    id: 3,
    link: 'Gallery',
  },
  {
    id: 4,
    link: 'Contact',
  },
];

const NavBar = () => {
  // State to manage the visibility of the mobile navigation menu
  const [nav, setNav] = useState(false);

  return (
    <div
      className='relative w-full h-56'
      style={{
        backgroundImage: `url(${BannerMap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Text elements */}
      <p className='absolute text-white text-[1.5rem] top-[2.3rem] inset-0 flex justify-center text-shadow-NavBar'>Pickup or Dine-In! 407-277-7755</p>
      <p className='absolute text-white text-[1rem] top-[6.8rem] inset-0 flex justify-center items-center text-shadow-NavBar'>Stasio's Italian Deli & Market</p>
      <p className='absolute text-white text-[1.2rem] top-[10rem] inset-0 flex justify-center items-center text-shadow-NavBar'>2320 E Robinson St, Orlando, FL 32803</p>
      
      {/* White Banner Background */}
      <div className='fixed w-full h-20 top-[7rem] transform -translate-y-1/2 bg-white z-10 shadow-2xl opacity-90'></div>
      
      {/* Navigation elements */}
      <div className='flex justify-between items-center fixed w-full h-56 z-20'>
        <div>
          <img
            src={Logo}
            alt=''
            className='w-56 ml-20'
          />
        </div>
        
        {/* Desktop navigation links */}
        <ul className='hidden md:flex'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-10 mr-20 ml-10 cursor-pointer capitalize text-red-950 hover:scale-150 duration-200 text-shadow-css text-2xl'
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4 z-10 md:hidden text-red-950'
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* Mobile navigation menu */}
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-zinc-50 z-10 '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-[1.2rem] text-4xl hover:scale-110 duration-200 text-red-950'
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

