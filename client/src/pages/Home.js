import Gallery from "../components/gallery";
import Hero from "../components/Hero";
import About from "../components/about";
import MapSection from "../components/MapSection";
import Menu from "../components/menu";
import ComeDine from "../components/comedine";
import Reviews from "../components/reviews";
//import DessertMenu from "../components/dessertMenu";
//import CoffeeMenu from "../components/coffeeMenu"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu/>
      {/* This is desserts<DessertMenu/> */} 
      {/* This is coffees<CoffeeMenu/>*/} 
      <Reviews/>
      <Gallery />
      <MapSection/> 
      <ComeDine/>
    </div>
  );
};
export default Home;
