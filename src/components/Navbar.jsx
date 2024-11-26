import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-3 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo or Home Link */}
        <NavLink to="/" className="text-white font-bold text-lg">
          Home
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-4 py-3 flex flex-col gap-4 text-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'text-white'
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
