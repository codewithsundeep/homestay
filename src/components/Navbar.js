import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-green-700">Eco Homestay</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-green-600">Home</a></li>
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#rooms" className="hover:text-green-600">Rooms</a></li>
          <li><a href="#gallery" className="hover:text-green-600">Gallery</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
