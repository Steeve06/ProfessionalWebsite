import React from "react";
import img from "../assets/img.png";
import {SERVICES_DATA} from "../services/services";
import { BENEFITS } from "../services/benefits";    
import {SplitSection} from "../components/SplitSection";
import { PROJECTS } from "../services/projects";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import '../styles/Homepage.css';

const Homepage = () => {
    return(
        <>
        {/* first section of homepage consisting of left and right columns */}
        <div className="Homepage">

            <SplitSection className="section1">

                <div className="left-content1">

                    <SectionHeader caption="Your Technology Partner" title="Transform Your" subtitle="Digital Future" />
                    <p className="section3-paragraph">MoctoTech helps businesses streamline operations, enhance productivity, and drive growth through innovative technology solutions.</p>

                    <div className="features">
                        <button className="cta-button">Get Started <span className="arrow">→</span></button>
                        <button className="our-services-button">Our Services</button>
                        
                    </div>

                    <hr className="divider" />

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

                <div className="right-content1">
                    <Card variant="hero-media">
                        <img src={img} alt="Technology Illustration" className="hero-image" />
                    </Card>              
                </div>

            </SplitSection>

        </div>

        {/* second section of homepage. showcases services offered using cards */}
        <div className="section2">
            <header className="section2-header">
                <button className="section2-title">Our Services</button>
                <h1 className="section2-subtitle">Comprehensive IT Solutions</h1>
                <p className="section2-paragraph">From strategy to implementation, we provide end-to-end technology services that help business thrive in the digital age.</p>
            </header>

            <div className="card-container2">
                {SERVICES_DATA.map((service) =>(
                    <Card key = {service.id} variant= "service" title = {service.title} description={service.description} imageUrl = {service.imageUrl}
                    />                
                ))}
            </div>
        </div>

        <SplitSection className="section3">

            <div className="left-content">

                <SectionHeader caption="Why Choose MoctoTech" title="Your Trusted Technology" subtitle="Partner" />
                <p className="section3-paragraph">We are a forward-thinking IT consulting firm dedicated to helping businesses navigate the complexities of digital transformation. Our mission is to deliver innovative, scalable solutions that drive measurable results.
                                                    Whether you're a startup looking to establish your tech infrastructure or an enterprise seeking to modernize legacy systems, 
                                                    we have the expertise and passion to make it happen.</p>
            </div>

            <div className="right-content">
                <div className="benefit-grid">
                    {BENEFITS.map((benefit, index)=>(
                        <Card key={index} variant="benefit" title={benefit.title} description={benefit.description} />
                    ))}
                </div>
            </div>

        </SplitSection>

        <div className="section4">

            <button className="section4-caption">Our Work</button>
                    <header>
                        <h1 className="section4-title">Featured Projects</h1>
                    </header>

                    <p className="section4-paragraph">
                        Discover how we've helped businesses across various industries achieve their technology goals through innovative solutions and expert consulting.
                    </p>

                    <div className="section4-container">
                        {PROJECTS.map((project) =>(
                            <Card key = {project.id} variant= "project" tag= {project.tag} title = {project.title} description={project.description} imageUrl = {project.imageUrl}
                            />                
                        ))}
                    </div>

                    <p className="section4-paragraph">
                        Want to see more of our work?
                    </p>

                    <button className="more-projects-button">View More Projects</button>
        </div>

        <section className="section-contact">
            <SectionHeader 
                align="center"
                caption="Get In Touch"
                title="Let's Build Something Amazing"
                description="Ready to transform your business? Reach out to discuss your project and discover how we can help you achieve your technology goals."
            />

            <SplitSection className="contact-container">
                {/* Left: Glassmorphism Form */}
                <div className="contact-form-glass">
                <form>
                    <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" />
                    </div>
                    <div className="form-group">
                    <label>Company</label>
                    <input type="text" placeholder="Your Company" />
                    </div>
                    <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us about your project..."></textarea>
                    </div>
                </form>
                </div>

                {/* Right: Icon List & Hours */}
                <div className="contact-info-glass">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtext">We're here to answer your questions and discuss how we can help your business succeed.</p>
                
                <div className="contact-methods">
                    <div className="method-item">
                    <div className="icon-box"><FaEnvelope /></div>
                    <div>
                        <h4>Email Us</h4>
                        <p>contact@techconsult.com</p>
                    </div>
                    </div>
                    <div className="method-item">
                    <div className="icon-box"><FaPhone /></div>
                    <div>
                        <h4>Call Us</h4>
                        <p>+1 (234) 567-890</p>
                    </div>
                    </div>
                </div>

                <div className="business-hours-card">
                    <h4>Business Hours</h4>
                    <div className="hours-row">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                    </div>
                </div>
                </div>
            </SplitSection>
        </section>

            
            </>
    );
}
export default Homepage;