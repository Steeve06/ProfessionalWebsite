import React from "react";
import { ArrowRight } from 'lucide-react'
import img from "../assets/img.png";
import '../styles/Homepage.css';

const Homepage = () => {
    return(
        <>
        {/* first section of homepage consisting of left and right columns */}
        <div className="Homepage">

            {/* left column with text and stats */}
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

            {/* right column with image */}
            <div className="right">
                <img className="home-image" src={img} alt="Homepage decoration" />
            </div>

        </div>

        {/* second section of homepage. showcases services offered using cards */}
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

            {/* third section of homepage. showcases why choose us using cards */}
            <div className = "section3">

                    <div className="left1">
                        <button className="caption1">Why Choose MoctoTech</button>
                        <header>
                            <h1 className="hero-title1">Your Trusted Technology</h1>
                            <span className="hero-subtitle1">Partner</span>
                        </header>

                        <p className="paragraph1">
                            MoctoTech is a forward-thinking IT consulting firm dedicated to helping businesses navigate the complexities of digital transformation.
                             Our mission is to deliver innovative, scalable solutions that drive measurable results.
                             <br></br>
                             <br></br>
                             Whether you're a startup looking to establish your tech infrastructure or an enterprise seeking to modernize legacy systems, we have the expertise and passion to make it happen.
                        </p>                        
                    </div>

                    <div className="right1">
                        <div className="card-container1">

                            <div className="card1">
                                <h2 className="card-title1">Expert Team</h2>
                                <p className="card-description1">Industry experts with deep experience in delivering innovative solutions.</p>
                            </div>

                            <div className="card1">
                                <h2 className="card-title1">Fast Delivery</h2>
                                <p className="card-description1">Agile methodologies ensure rapid project completion without compromising quality.</p>
                            </div>

                            <div className="card1">
                                <h2 className="card-title1">Quality First</h2>
                                <p className="card-description1">Commitment to excellence in every solution we deliver to clients.</p>
                            </div>

                            <div className="card1">
                                <h2 className="card-title1">Proven Results</h2>
                                <p className="card-description1">Track record of delivering successful projects and satisfied clients.</p>
                            </div>

                            
                        </div>
                    </div>
            </div>

            <div className="section4">

                <button className="caption2">Our Work</button>
                        <header>
                            <h1 className="hero-title2">Featured Projects</h1>
                        </header>

                        <p className="paragraph2">
                            Discover how we've helped businesses across various industries achieve their technology goals through innovative solutions and expert consulting.
                        </p>

                       
                        <div className="card-container2">

                            <div className="card2">
                                <span className="card-tag">Cloud Infrastructure</span>
                                <h2 className="card-title2">Enterprise Cloud Migration</h2>
                                <p className="card-description2">Industry experts with deep experience in delivering innovative solutions.</p>
                                 <a href="#project1" className="project1">View Case Study<ArrowRight size={18} style={{ marginLeft: '1px' }} /></a>
                            </div>

                            <div className="card2">
                                <span className="card-tag">Software Development</span>
                                <h2 className="card-title2">Hospital Management System</h2>
                                <p className="card-description2">Agile methodologies ensure rapid project completion without compromising quality.</p>
                                 <a href="#project1" className="project1">View Case Study<ArrowRight size={18} style={{ marginLeft: '1px' }} /></a>
                            </div>

                            <div className="card2">
                                <span className="card-tag">Software Life Cycle</span>
                                <h2 className="card-title2">Software Design & Architecture</h2>
                                <p className="card-description2">Commitment to excellence in every solution we deliver to clients.</p>
                                <a href="#project1" className="project1">View Case Study<ArrowRight size={18} style={{ marginLeft: '1px' }} /></a>
                            </div>
                            
                        </div>

                        <p className="paragraph3">
                            Want to see more of our work?
                        </p>

                        <button className="more-projects-button">View More Projects</button>





            </div>
            

             



        </div></>

    );
}
export default Homepage;