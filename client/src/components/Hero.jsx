import React, { useEffect, useState } from "react";
import HeroSlider, { Slide, ButtonsNav, Nav } from "hero-slider";
import { heroImages } from "../constants";

const Hero = () => {
  const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(
    window.matchMedia("(max-width: 1030px)").matches
  );

  useEffect(() => {
    // Add a listener to check for screen size changes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (event) => {
      setIsMediumOrSmaller(event.matches);
    };
    mediaQuery.addListener(handleChange);

    // Clean up the listener when the component unmounts
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <HeroSlider
      height={"75vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {heroImages.map((hero, i) => (
        <Slide
          key={i}
          label={hero.title}
          background={{
            backgroundImageSrc: hero.image,
            backgroundAnimation: "fade",
          }}
        />
      ))}

      <ButtonsNav
        isNullAfterThreshold
        position={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {isMediumOrSmaller && <Nav />}
    </HeroSlider>
  );
};

export default Hero;
