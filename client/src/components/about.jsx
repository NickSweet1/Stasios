import { aboutText, familyText, italyText } from "../constants";

const About = () => {
  return (
    <div className="md:flex bg-sgreen">
      <p className="mt-4  text-white px-3  text-[17px] sm:w-full md:w-full lg:w-1/2 max-w-3xl leading-[30px] ">
        Welcome to Stasio's Italian Deli & Market, your gateway to an authentic
        Italian culinary experience right here in Orlando. Nestled in the heart
        of our vibrant city, Stasio's invites you to embark on a journey through
        the flavors and traditions of Italy.
      </p>
      <img
        src="https://lh3.googleusercontent.com/pw/ADCreHeAjQ15xI4s1_vrPd5y-djtePW9PDzqMg3e-qY4tUT_LD3wRZOmdFjx5_yXTmZWI3I4OFmVuLG7uDq8wC8HLHbLfF6svjjeMnkw9f7gYAa_3ifiRlH0yQfhf1JOnfPg8etZaXlbZ2wAbRqqYaVq1a3YctpcFYijzQ_U1XCIA0e1RNPWMZ6BOjfqniD4d3LWKva4hBVpzPSG_ZBiRxy-2dLnorJ2sEjUert_LI-50HMkD5BIz3X8w_SjKZoYJJP_JdeNqeatkk4AfCM-0Cj26m4LAN5JWADxL86W-7jlj8RCBMHfeosEd4VW_cDBFrr1CFU05A43x9Bg4Jx7xe2KTQYAblHZQovy1q2CDoAXEnVsdiYIt-iwRbVOPcoOC_ew0lsRcFZFIjQD0yUzuOIfKpCNkwAYiKFtj0zJe4o8pdfhOiXmEkkCY1K22tdo6i3QaRt3VZuXo5TlwFZV7dx_q-qgmQdR6VLL8HvzH5kvua05CCYWuMAFDIKIUPXMAYUWGJNy1sRLGTCc9dzJgT1Bg-km6w5Ek2IkRjhr5WgFL3QTbxNJtdB31wwTVohvJS1sutnODqtP3JwNEUNcVTYeghoeCz4kviWRQTOi_59cXBDjvE9F-O_YdRhXwxKHgu8vrmyTk2H6hYY4k_xZVnfOfsbuguvHozeHzpllKcyhqWqhL2ndgQpPEE2QQfRG5lpppffxewfVt-5tP8QEw-siZG1GypbtiaH4rShK99vhOlcuzl2khMxOw_dh1tD4ZLp81MrDmnxkjoxTyL43hDe4zM7tqoVYfwpZc5FM40tkBWsPxAnR2NSxgfgBS5JjGHgMp2WP2zEASc_ipS9_STriSUy6h1VeLV_bxF4_1rtvRV3vyW1JYRtTKacaFeLjnTC4g2JgBPR0_wbUYUcIsKih-fqL1w=w1280-h484-s-no?authuser=0"
        sizes="(max-width: 767px) 100vw, (max-width: 991px) 58vw, (max-width: 1279px) 46vw, 48vw"
        alt={aboutText.title}
        className="sm:w-full sm:h-1/3  md:h-1/2 md:w-1/2  lg:mt-0 lg:px-10  lg:w-1/2 "
      />
    </div>
  );
};

export default About;
