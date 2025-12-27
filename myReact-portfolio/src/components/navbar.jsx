// navbar.jsx
import { Link } from "react-router-dom";
// Navbar 
const Navbar = ()=>{
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/cssprojects'>Css-Projects</Link></li>
                <li><Link to='/javascriptprojects'>Javascript-Projects</Link></li>
                <li><Link to='/codingexercises'>Coding-Exercises</Link></li>
                <li><Link to='/beyondcode'>Beyond-code</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;