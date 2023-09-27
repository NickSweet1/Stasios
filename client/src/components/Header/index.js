import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Logo from '../../assets/LogoStasios.png';
import BannerMap from '../../assets/BannerMap.jpg';

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
  const [nav, setNav] = useState(false);

  return (
    <div
      className='relative w-full h-80'
      style={{
        backgroundImage: `url(${BannerMap})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex justify-between items-center relative w-full h-80 text-white'>
        <div>
          <img
            src={Logo}
            alt=''
            className='w-72 ml-20 shadow-lg' 
          />
        </div>

        <ul className='hidden md:flex'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-10 cursor-pointer capitalize font-medium text-white hover:scale-150 duration-200'
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className='cursor-pointer pr-4 z-10 text-white md:hidden'
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-gray-950 to-gray-900'>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200'
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
