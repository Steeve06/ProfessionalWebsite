import React from "react";
import "../styles/Navbar.css";



const Navbar = () => {
    return (
        <nav className = "Navbar">

            {/* Left side of the navbar */}
            <div className="Navbar-left">
                <a href="/" className="logo">
                    MoctoTech
                </a>
            </div>

            <div className="Navbar-right"> 
                <ul className="Nav-links">
                    <li>
                        <a href="/Homepage">Home</a>
                    </li>
                    <li>
                        <a href = "/AboutPage">About</a>
                    </li>
                    <li>
                        <a href="/ServicesPage">Services</a>
                    </li>
                    <li>
                        <a href="/ScheduleCall">Schedule Call</a>
                    </li>
                </ul>
            </div>

           

        </nav>  
    );
}

export default Navbar;