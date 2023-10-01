import React from "react";
import map from "../assets/othermap.jpg";

//
const mapsection = () => {
  const googleMapsUrl = "https://maps.app.goo.gl/h8BBESCTktpj1waP6";

  return (
    <div className="relative min-h-screen z-2 mt-[-15rem]">
      {/* Dark overlay with text */}
      <a
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-lightgray opacity-75 hover:bg-black transition-opacity duration-300"
      >
        <div className="text-white text-center opacity-0 transition-opacity duration-300">
          <p className="text-5xl">Come and visit</p>
        </div>
      </a>

      {/* Hover effect for text */}
      <style>
        {`
          .bg-lightgray {
            transition: background-color 0.3s;
          }

          .bg-lightgray:hover .opacity-0 {
            opacity: 1;
          }
        `}
      </style>
      <img src={map} alt="map" className="w-full h-screen object-cover" />
    </div>
  );
};

export default mapsection;
