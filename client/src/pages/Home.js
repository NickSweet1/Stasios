import Gallery from "../components/gallery";
import Hero from "../components/Hero";
import About from "../components/about";
import MapSection from "../components/MapSection"
import Menu from "../components/menu"
import ComeDine from "../components/comedine"
import Reviews from "../components/reviews";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu/>
      <Gallery />
      <MapSection/> 
      <ComeDine/>
      <Reviews/>
    </div>
  );
};
export default Home;
