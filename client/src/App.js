import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/index";
import Contact from "./pages/Contact.js";
import Home from "./pages/Home.js";

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
    </>
  );
}

export default App;
