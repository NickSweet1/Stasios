import HeroSlider, { Slide, MenuNav } from "hero-slider";

export default function Hero() {
  return (
    <HeroSlider
      height={"75vh"}
      autoplay
      controller={{
        initialSlide: 5,
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
      <Slide
        label="Pastrami"
        background={{
          backgroundImageSrc:
            "https://lh3.googleusercontent.com/pw/ADCreHeZ-GMYd1RoxowXBR9dwIQJNqy-VqcU4c7vO2FjzCqGTZcNbYm6L7nTstioQtdEs1w1hNs-5SABUPo_HYyFvkX7nehBZa7daYwl5rxzf34folFjt-F0FiWtNJ5HAY8ToC8R4P_5ThCQYrTP8u6YNryF=w1325-h884-s-no?authuser=0",
        }}
      />
      <Slide
        label="Cannoli"
        background={{
          backgroundImageSrc:
            "https://lh3.googleusercontent.com/pw/ADCreHci230alOE4K4oI7BGEEFQ5Ej2DNxZoiyHoMivRTvOSbe7yByi5Htb3qvtDzuP5GFkHJzNxI4XE7fqplj9HA8pOocRUCTF6XJCkUj_jT5y80o5Jhkzc1vM9AuwYbnxIrhFLGU8fOsSL09zNjmip2JGk=w1324-h884-s-no?authuser=0",
        }}
      />
      <Slide
        label="The Package"
        background={{
          backgroundImageSrc:
            "https://lh3.googleusercontent.com/pw/ADCreHc-tGQdqwPCiGgIzAAQiYTarsTgTU87nbFzU1stw--6E8we_jaxGgM29Kcbhlsw5cUiXIvjgQeJBNWF5xiNKetK4-UG7sv3Qklu8dzb4ZRUB8GQgSUUzq7HwzUxXbW28SzGyioDel8EOCzDss4LlqiJ=w1131-h884-s-no?authuser=0",
        }}
      />
      <Slide
        label="Tirimasu"
        background={{
          backgroundImageSrc:
            "https://lh3.googleusercontent.com/pw/ADCreHcIal74RQjYsn20a5WorZTDriSE7EBaK8erpBJ1r342rerWSUT4ie-ZcsFq2wFimQ_NYYjUjxe5qeu8pvag-Ulejc5axBeU012qTuwP_lPUX0M6tG6aVbJPfBOD6sIlZ6ffLhCRpb2zPKmmcWkixcWO=w1200-h800-s-no?authuser=0",
        }}
      />

      <Slide
        label="Family"
        background={{
          backgroundImageSrc:
            "https://lh3.googleusercontent.com/pw/ADCreHcOILR-1xj5YCrCRRaaS7Oi1r12EaAA4P1cDQA3sezbaIu4wpTk1WYMS9ZH3THh7O66jR7CUdE_nmqlqUx1yxAoSTUG0mtXOn7UN-hzLZYuI1v086CuJ7IB1B6CS4_V-2ILWUnp9nMdj8o_QfZFjaqI=w1325-h884-s-no?authuser=0",
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
