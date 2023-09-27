import ContactForm from "../components/contactForm";
import { mapImage } from "../constants";

import { FaFacebookF, FaYelp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="flex m-auto pt-16 justify-center items-center">
        <div className="flex w-[500px] bg-bgMap bg-center h-16 justify-center items-center rounded-full">
          <h1 className="text-4xl font-bold text-left">
            <span className="text-[#019246] drop-shadow-2xl">CO</span>
            <span className="text-white drop-shadow-2xl">NTA</span>
            <span className="text-[#CE2B37] drop-shadow-2xl">CT</span>
          </h1>
        </div>
      </div>
      <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-6">
        <p className="text-center py-8"></p>
        <div className="grid sm:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 items-center">
            <p className="">
              <span className="font-bold">Phone:</span>
              <br></br> (000)000-0000
            </p>
            <p className="">
              <span className="font-bold">Email:</span>
              <br></br> stacios@stacios.com
            </p>
            <div className="pt-6">
              <p className="">
                <span className="font-bold">Physical Address:</span>
                <br></br>
                Stacios Rd, <br></br>Orlando Fl 32948
              </p>
            </div>
            <div className="pt-6">
              <p className="">
                <span className="font-bold">Mailing Address:</span>
                <br></br>
                Stacios Rd, <br></br>Orlando Fl 32948
              </p>
            </div>
            <div className="flex col-span-2 items-center justify-center py-6 space-x-8">
              <FaFacebookF
                onClick=""
                className="cursor-pointer hover:scale-110 ease-in duration-200"
                size={30}
              />
              <FaInstagram
                onClick=""
                className="cursor-pointer hover:scale-110 ease-in duration-200 pl"
                size={30}
              />
              <FaYelp
                onClick=""
                className="cursor-pointer hover:scale-110 ease-in duration-200"
                size={30}
              />
            </div>
          </div>

          <img
            className="max-h-max"
            src={mapImage.image}
            alt={mapImage.description}
          />
        </div>
        <div className="flex items-center justify-center py-16">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
