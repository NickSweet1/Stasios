import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../../assets/LogoStasios.png";
import BannerMap from "../../assets/BannerMap.jpg";

const links = [
  {
    id: 1,
    link: "about",
  },
  {
    id: 2,
    link: "menu",
  },
  {
    id: 3,
    link: "gallery",
  },
  {
    id: 4,
    link: "contact",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-56`}
      style={{
        backgroundImage: `url(${BannerMap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className="absolute text-white text-[1.5rem] top-[2.3rem] inset-0 flex justify-center text-shadow-NavBar">
        Pickup or Dine-In! 407-277-7755
      </p>
      <p className="absolute text-white text-[1rem] top-[6.8rem] inset-0 flex justify-center items-center text-shadow-NavBar">
        Stasio's Italian Deli & Market
      </p>
      <p className="absolute text-white text-[1.2rem] top-[10rem] inset-0 flex justify-center items-center text-shadow-NavBar">
        2320 E Robinson St, Orlando, FL 32803
      </p>

      <div
        className={`fixed w-full h-20 bg-white z-10 shadow-2xl opacity-90 ${
          scrolling ? "top-[0rem]" : "top-[4.5rem]"
        } transition-top duration-[400ms] ease-in-out`}
      ></div>
      <div
        className={`flex justify-between items-center fixed w-full h-56 z-20 ${
          scrolling ? "top-[-4.5rem]" : "top-[0rem]"
        } transition-top duration-[400ms] ease-in-out`}
      >
        
        <div>
          <img src={Logo} alt="logo" className="w-56 ml-20 opacity-100" />
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-10 mr-20 ml-10 cursor-pointer capitalize text-red-950 hover:scale-150 duration-200 text-shadow-css text-2xl"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 md:hidden text-red-950"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center fixed top-0 w-full h-screen bg-zinc-50 z-10 pt-[6rem]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-[2rem] text-4xl hover:scale-110 duration-200 text-red-950"
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
