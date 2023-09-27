import Gallery from "../components/gallery";
import Hero from "../components/Hero";
import About from "../components/about";
import MapSection from "../components/MapSection"
import Menu from "../components/menu"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Menu/>
      <Gallery />
      <MapSection/> 
    </div>
  );
};
export default Home;
