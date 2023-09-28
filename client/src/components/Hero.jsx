import HeroSlider, { Slide, MenuNav } from "hero-slider";
import { heroImages } from "../constants";

const Hero = () => {
  return (
    <HeroSlider
      height={"75vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 200,
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
      {heroImages.map((hero) => (
        <Slide
          label={hero.title}
          background={{
            backgroundImageSrc: hero.image,
          }}
        />
      ))}
      <MenuNav className="hs-menu-nav" />
    </HeroSlider>
  );
};

export default Hero;
