import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Coffee Shop</div>
        <div>
          <Link to="/" className="text-white mx-2 hover:text-gray-400">Home</Link>
          <Link to="/addcoffee" className="text-white mx-2 hover:text-gray-400">AddCoffee</Link>
          <Link to="/user" className="text-white mx-2 hover:text-gray-400">User</Link>
          <Link to="/signin" className="text-white mx-2 hover:text-gray-400">Login</Link>
          <Link to="/signup" className="text-white mx-2 hover:text-gray-400">Register</Link>
          <Link to="/shop" className="text-white mx-2 hover:text-gray-400">Shop</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
