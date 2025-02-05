import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 min-h-screen">
      <nav className="bg-[#0c0c1d]/80 text-white p-4 fixed top-0 w-full shadow-md z-50 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide">g1</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 bg-[#1b1b3a]/80 px-6 py-2 rounded-full">
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg bg-white text-black transition">Home</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">About</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">Services</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">Our Team</li>
          </ul>
          
          {/* Contact & Login/SignUp Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-900 transition">Contact</button>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition">
              Login/SignUp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#1b1b3a]/90">
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">Home</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">About</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">Services</li>
            <li className="hover:text-gray-300 cursor-pointer px-4 py-2 rounded-lg transition">Our Team</li>
            <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-900 transition">Contact</button>
            <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition">
              Login/SignUp
            </button>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
