import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Career from "./pages/Career";


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />

      </Routes>
    </Router>
  );
}

export default App;
