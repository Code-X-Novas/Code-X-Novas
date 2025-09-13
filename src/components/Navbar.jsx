import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Code X Novas" className="h-8" />
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/works">Our Works</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>

      {/* CTA */}
      <button className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-5 py-2 rounded-md hover:opacity-90">
        Contact Us
      </button>
    </nav>
  );
}
