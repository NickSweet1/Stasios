import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/index";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import Dahsboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dahsboard />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
