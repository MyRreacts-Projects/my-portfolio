// navbar.jsx
import {NavLink } from "react-router-dom";
// Navbar 
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/cssprojects'>Css-Projects</NavLink></li>
                <li><NavLink to='/javascriptprojects'>Javascript-Projects</NavLink></li>
                <li><NavLink to='/codingexercises'>Coding-Exercises</NavLink></li>
                <li><NavLink to='/beyondcode'>Beyond-code</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;