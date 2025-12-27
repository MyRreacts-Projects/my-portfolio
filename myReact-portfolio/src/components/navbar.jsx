// navbar.jsx
import {NavLink } from "react-router-dom";
import { useState } from "react";
// Navbar 
const Navbar = ()=>{
    return(
        <nav className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-[16px]">
                <div className="flex justify-between items-center h-[60px]">

                    {/* logo */}
                    <div className="text-[30px] font-bold">
                        AZIZULLAH
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex gap-[20px]">
                        <NavLink to='/about'className='hover:text-blue-400 transition duration-700'>About</NavLink>
                        <NavLink to='/resume' className='hover:text-blue-400 transition duration-700'>Resume</NavLink>
                        <NavLink to='/services' className='hover:text-blue-400 transition duration-700'>Services</NavLink>
                        <NavLink to='/cssprojects' className='hover:text-blue-400 transition duration-700'>Css-Projects</NavLink>
                        <NavLink to='/javascriptprojects' className='hover:text-blue-400 transition duration-700'>Javascript-Projects</NavLink>
                        <NavLink to='/codingexercises' className='hover:text-blue-400 transition duration-700'>Coding-Exercises</NavLink>
                        <NavLink to='/beyondcode' className='hover:text-blue-400 transition duration-700'>Beyond-code</NavLink>
                        <NavLink to='/contact' className='hover:text-blue-400 transition duration-700'>Contact</NavLink>
                    </div>
                    {/* mobile menu */}

                </div>
            </div>
        </nav>
    )
}
export default Navbar;

{/* <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/cssprojects'>Css-Projects</NavLink></li>
                <li><NavLink to='/javascriptprojects'>Javascript-Projects</NavLink></li>
                <li><NavLink to='/codingexercises'>Coding-Exercises</NavLink></li>
                <li><NavLink to='/beyondcode'>Beyond-code</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li> */}