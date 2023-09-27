import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/index";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
