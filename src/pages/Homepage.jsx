import React from "react";
import img from "../assets/img.png";
import '../styles/Homepage.css';

const Homepage = () => {
    return(
        <><div className="Homepage">

          

            <div className="left">
                <button className="caption">Your Technology Partner</button>
                <header>
                    <h1 className="hero-title">Transform Your</h1>
                    <span className="hero-subtitle">Digital Future</span>
                </header>

                <p className="paragraph">
                    MoctoTech helps businesses streamline operations, enhance productivity, and drive growth through innovative technology solutions.
                </p>

                <div className="features">
                    <button className="cta-button">Get Started <span className="arrow">→</span></button>
                    <button className="our-services-button">Our Services</button>
                    <hr className="divider" />
                </div>

                <div className="stats-container">
                    <div className="stat-item">
                        <h2 className="stat-number blue">50+</h2>
                        <p className="stat-label">Projects Delivered</p>
                    </div>

                    <div className="stat-item">
                        <h2 className="stat-number purple">98%</h2>
                        <p className="stat-label">Satisfied Clients</p>
                    </div>

                    <div className="stat-item">
                        <h2 className="stat-number pink">24/7</h2>
                        <p className="stat-label">Support Available</p>
                    </div>
                </div>


            </div>
          

            <div className="right">
                <img className="home-image" src={img} alt="Homepage decoration" />
            </div>

        </div>

        <div className="section2">
            <header className="section2-header">
                <button className="section2-title">Our Services</button>
                <h1 className="section2-subtitle">Comprehensive IT Solutions</h1>
                <p className="section2-paragraph">From strategy to implementation, we provide end-to-end technology services that help business thrive in the digital age.</p>
            </header>

            <div className="card-container">
                <div className="card">
                    <h2 className="card-title">Custom Software Development</h2>
                    <p className="card-description">Tailored software solutions designed to meet your unique business needs and drive growth.</p>
                </div>

                <div className="card">
                    <h2 className="card-title">Cloud Infrastructure</h2>
                    <p className="card-description">Scalable and secure cloud solutions that enhance performance and reduce operational costs.</p>
                </div>

                <div className="card">
                    <h2 className="card-title">Cybersecurity Solutions</h2>
                    <p className="card-description">Comprehensive security services to protect your digital assets and ensure compliance with industry standards.</p>
                </div>

                <div className="card">
                    <h2 className="card-title">Custom Software Development</h2>
                    <p className="card-description">Tailored software solutions designed to meet your unique business needs and drive growth.</p>
                </div>

                <div className="card">
                    <h2 className="card-title">Cloud Infrastructure</h2>
                    <p className="card-description">Scalable and secure cloud solutions that enhance performance and reduce operational costs.</p>
                </div>

                <div className="card">
                    <h2 className="card-title">Cybersecurity Solutions</h2>
                    <p className="card-description">Comprehensive security services to protect your digital assets and ensure compliance with industry standards.</p>
                </div>

            </div>
            

             



        </div></>

    );
}
export default Homepage;