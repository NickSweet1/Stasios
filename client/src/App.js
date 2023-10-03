import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/index";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
