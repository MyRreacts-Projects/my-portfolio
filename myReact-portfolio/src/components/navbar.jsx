import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-300 w-full">
      
      {/* Top Bar */}
      <div className="h-20 flex items-center justify-between px-4 sm:px-10">
        
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold">
          AZIZULLAH
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/cssprojects">CSS</NavLink>
          <NavLink to="/javascriptprojects">JS</NavLink>
          <NavLink to="/codingexercises">Exercises</NavLink>
          <NavLink to="/beyondcode">Beyond</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-zinc-200`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">

          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/resume" onClick={() => setIsOpen(false)}>Resume</NavLink>
          <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
          <NavLink to="/cssprojects" onClick={() => setIsOpen(false)}>CSS</NavLink>
          <NavLink to="/javascriptprojects" onClick={() => setIsOpen(false)}>JS</NavLink>
          <NavLink to="/codingexercises" onClick={() => setIsOpen(false)}>Exercises</NavLink>
          <NavLink to="/beyondcode" onClick={() => setIsOpen(false)}>Beyond</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
