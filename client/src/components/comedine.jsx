import React from "react";
import photo from "../assets/B444A516-B7C5-42F1-8F28-E88A3064054C.jpeg";
import "../index.css";

const comedine = () => {
  return (
    <div className="relative min-w-screen">
      {/* Dark overlay with text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/60">
        <div className="text-white text-center">
          <p className="text-4xl md:text-5xl">
            <strong className="font-extrabold text-shadow-css">
              Come In And Dine With Us
            </strong>
          </p>
          <p className="font-semibold text-lg mt-4">
            <span className="italic">Open 6 Days</span>
            <br />
            <br />
            <strong className="font-extrabold text-shadow-css">
              Closed Sundays
            </strong>
            <br />
            <br />
            <strong className="font-extrabold text-shadow-css">
              Monday-Friday 7 am - 7 pm
            </strong>
            <br />
            <br />
            <strong className="font-extrabold text-shadow-css">
              Saturday 9 am - 5 pm
            </strong>
          </p>
        </div>
      </div>

      <img
        src={photo}
        alt="italy with closing times"
        className="w-full h-screen object-cover"
      />
    </div>
  );
};

export default comedine;
