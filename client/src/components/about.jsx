import { aboutText } from "../constants";

const About = () => {
  return (
    <div name="about" className="md:px-[5rem] m-auto justify-center">
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:h-90 ">
        <div className=" grid-cols-1 bg-inside bg-center text-white text-center place-content-center px-5 py-7 ">
          <h1 className=" text-4xl font-[800]">{aboutText[0].title}</h1>
          <p className="mt-4  text-white font-[500] text-lg bg-white/10">
            {aboutText[0].body}
          </p>
        </div>
        <img
          src={aboutText[0].image}
          alt={aboutText[0].title}
          className="grid-cols-1 w-full h-full   "
          // className="sm:w-full sm:h-1/3  md:h-1/2 md:w-1/2  lg:mt-0 lg:px-10  lg:w-1/2 "
        />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:h-96">
        <img
          src={aboutText[1].image}
          alt={aboutText[1].title}
          className="grid-cols-1 w-full h-full"
          // className="sm:w-full sm:h-1/3  md:h-1/2 md:w-1/2  lg:mt-0 lg:px-10  lg:w-1/2 "
        />
        <div className="grid-cols-1 text-center bg-outside bg-center place-content-center px-5 py-9">
          <h1 className=" text-4xl font-[700] text-white">
            {aboutText[1].title}
          </h1>
          <p className="mt-4  text-white px-3 font-[500] text-lg bg-white/10 ">
            {aboutText[1].body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
