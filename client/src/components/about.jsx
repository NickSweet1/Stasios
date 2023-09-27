import { aboutText } from "../constants";

const About = () => {
  return (
    <div className="px-[5rem] m-auto justify-center">
      <div className="md:flex bg-inside bg-center lg:h-90 ">
        <div className="grid text-red-950 text-center place-content-center px-5 py-7">
          <h1 className=" text-4xl font-[700]">{aboutText[0].title}</h1>
          <p className="mt-4  text-red-950 font-[400] text-lg bg-white/10">
            {aboutText[0].body}
          </p>
        </div>
        <img
          src={aboutText[0].image}
          alt={aboutText[0].title}
          className="md: w-1/2 lg: col-span-4"
          // className="sm:w-full sm:h-1/3  md:h-1/2 md:w-1/2  lg:mt-0 lg:px-10  lg:w-1/2 "
        />
      </div>

      <div className="md:flex bg-outside bg-center lg:h-96">
        <img
          src={aboutText[1].image}
          alt={aboutText[1].title}
          className="md: w-1/2 lg: col-span-4"
          // className="sm:w-full sm:h-1/3  md:h-1/2 md:w-1/2  lg:mt-0 lg:px-10  lg:w-1/2 "
        />
        <div className="grid text-blacktext-center place-content-center px-5 py-9">
          <h1 className=" text-4xl font-[700] text-red-950">{aboutText[1].title}</h1>
          <p className="mt-4  text-red-950 px-3 font-[400] text-lg bg-white/10 ">
            {aboutText[1].body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
