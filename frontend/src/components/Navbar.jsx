import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <nav className="Navbar" aria-label="Main Navigation">

            {/* Logo — always visible */}
            <div className="Navbar-left">
                <Link to="/" className="logo" onClick={close}>
                    MoctoTech
                </Link>
            </div>

            {/* Hamburger — CSS keeps this display:none on desktop */}
            <button
                className={`hamburger${isOpen ? ' open' : ''}`}
                onClick={() => setIsOpen(prev => !prev)}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
            >
                <span />
                <span />
                <span />
            </button>

            {/*
              Desktop: .Navbar-right is display:flex, max-height:none — always visible.
              Mobile:  .Navbar-right collapses to max-height:0, expands via .mobile-open.
            */}
            <div className={`Navbar-right${isOpen ? ' mobile-open' : ''}`}>
                <ul className="Nav-links">
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-cta">
                        <Link to="/schedule" onClick={close}>
                            Book a Call
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;