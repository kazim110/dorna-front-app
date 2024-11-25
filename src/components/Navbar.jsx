import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-lg font-bold">AdCompany</Link>
      <div>
        <Link to="/" className="px-3">Home</Link>
        <Link to="/about" className="px-3">About</Link>
        <Link to="/services" className="px-3">Services</Link>
        <Link to="/contact" className="px-3">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
