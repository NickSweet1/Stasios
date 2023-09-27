import React from 'react';
import map from '../assets/othermap.jpg';

const mapsection = () => {
  const googleMapsUrl =
    'https://www.google.com/maps/dir/28.2965521,-81.3949256/google+maps+stasio/@28.4213207,-81.5022815,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x88e77ada611aaaab:0xb80ed6b6c26907dd!2m2!1d-81.3521054!2d28.5458053?entry=ttu';

  return (
    <div className='relative min-h-screen'>
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

      <img
        src={map}
        alt="map"
        className="w-full h-screen object-cover"
      />
    </div>
  );
}

export default mapsection;
