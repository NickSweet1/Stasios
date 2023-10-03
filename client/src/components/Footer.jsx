import React, { useState } from "react";
import Modal from "../components/modal";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="flex flex-col items-center bg-amber-950 text-center text-white opacity-80">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div className="pt-0 mb-3 flex justify-center"></div>
      <div className="container pt-9">
        <div className="mb-9 flex justify-center">
          <a
            href="https://www.facebook.com/p/Stasios-Italian-deli-100063550872193/"
            target="_blank"
            rel="noreferrer"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#019246"
              className="hover:scale-150 ease-in duration-300"
            >
              <path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/stasiositaliandeli/"
            target="_blank"
            rel="noreferrer"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#00000"
              className="hover:scale-150 ease-in duration-300 invert"
            >
              <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
            </svg>
          </a>
          <a
            href="https://www.yelp.com/biz/stasios-orlando?osq=stasios"
            target="_blank"
            rel="noreferrer"
            className="mr-9 text-neutral-800 dark:text-neutral-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              id="IconChangeColor"
              height="30"
              width="24"
              className="hover:scale-150 ease-in duration-300"
            >
              <path
                d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z"
                fill="#ce2b37"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      {/* Copyright section */}
      <div className="flex justify-center w-full p-6  bg-amber-950 text-white mr-9">
        © 2023 Stasios Italian Deli
        <button
          onClick={() => setIsOpen(true)}
          className="hover:shadow-lg ml-1 mt-4 text-xl absolute font-bold text-white opacity-10  drop-shadow-2xl"
          type="submit"
        >
          Login
        </button>
      </div>
    </footer>
  );
};

export default Footer;
