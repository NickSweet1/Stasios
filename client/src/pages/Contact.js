import ContactForm from "../components/contactForm";
import map from "../assets/othermap.jpg";

import { FaFacebookF, FaYelp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const fbNav = () => {
    window.open(
      "https://www.facebook.com/p/Stasios-Italian-deli-100063550872193/",
      "_blank"
    );
  };
  const igNav = () => {
    window.open("https://www.instagram.com/stasiositaliandeli/", "_blank");
  };
  const yelpNav = () => {
    window.open("https://www.yelp.com/biz/stasios-orlando", "_blank");
  };

  const googleMapsUrl =
    "https://www.google.com/maps/place/Stasio's+Italian+Deli+%26+Market/@28.5457224,-81.354684,17z/data=!4m6!3m5!1s0x88e77ada611aaaab:0xb80ed6b6c26907dd!8m2!3d28.5457224!4d-81.3521037!16s%2Fg%2F11ggsrj9kd?entry=ttu";

  return (
    <>
      <div className="flex m-auto pt-16 justify-center items-center">
        <div className="flex w-[500px] bg-bgMap bg-center h-16 justify-center items-center rounded-2xl drop-shadow-2xl">
          <h1 className="font-bold text-[3.4rem] text-left">
            <span className="text-white drop-shadow-2xl bg-[#019246]">CO</span>
            <span className="text-amber-950 drop-shadow-2xl bg-white">NTA</span>
            <span className="text-white drop-shadow-2xl bg-[#CE2B37]">CT</span>
          </h1>
        </div>
      </div>
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-6 text-shadow-css">
        <p className="text-center py-8"></p>
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 items-center bg-white opacity-80 text-amber-950  rounded-2xl drop-shadow-2xl">
            <p className="p-9 font-semibold">
              <span className="font-bold text-2xl">Phone:</span>
              <br></br> (407) 277-7755
            </p>
            <p className="p-4 font-semibold">
              <span className="font-bold text-2xl">Email:</span>
              <br></br> stacios@stacios.com
            </p>
            <div className="pt-2">
              <p className="pl-9 font-semibold">
                <span className="font-bold text-[1.3rem]">
                  Physical Address:
                </span>
                <br></br>
                2320 E Robinson St, <br></br>Orlando, FL 32803
              </p>
            </div>
            <div className="pt-2">
              <p className="pl-4 font-semibold">
                <span className="font-bold text-[1.3rem]">
                  Mailing Address:
                </span>
                <br></br>
                2320 E Robinson St, <br></br>Orlando, FL 32803
              </p>
            </div>
            <div className="flex col-span-2 items-center justify-center py-6 space-x-8">
              <FaFacebookF
                onClick={fbNav}
                className="cursor-pointer hover:scale-150 ease-in duration-300"
                size={30}
              />
              <FaInstagram
                onClick={igNav}
                className="cursor-pointer hover:scale-150 ease-in duration-300"
                size={30}
              />
              <FaYelp
                onClick={yelpNav}
                className="cursor-pointer hover:scale-150 ease-in duration-300"
                size={30}
              />
            </div>
          </div>
          <div className="relative">
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
              className="w-full h-[300px] object-cover hover:scale-110 ease-in duration-200 rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-16">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
