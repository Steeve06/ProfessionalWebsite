import React from "react";
import { Link, NavLink } from "react-router-dom"; // Essential for SPAs
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar" aria-label="Main Navigation">
            <div className="Navbar-left">
                {/* Use Link for the logo to return home without a refresh */}
                <Link title="MoctoTech Home" to="/" className="logo">
                    MoctoTech
                </Link>
            </div>

            <div className="Navbar-right"> 
                <ul className="Nav-links">
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li>
                        {/* Call to Action (CTA) button style */}
                        <Link to="/schedule" className="nav-cta">
                            Schedule Call
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>  
    );
}

export default Navbar;