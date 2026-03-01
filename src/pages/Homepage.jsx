import React from "react";
import img from "../assets/img.png";
import {SERVICES_DATA} from "../services/services";
import { BENEFITS } from "../services/benefits";    
import {SplitSection} from "../components/SplitSection";
import { PROJECTS } from "../services/projects";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
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
                {SERVICES_DATA.map((service) =>(
                    <Card key = {service.id} variant= "service" title = {service.title} description={service.description} imageUrl = {service.imageUrl}
                    />                
                ))}
            </div>
        </div>

        <SplitSection className="section3">

            <div className="left-content">

                <SectionHeader caption="Why Choose MoctoTech" title="Your Trusted Technology" subtitle="Partner" />
                <p className="section3-Paragraph">We are a forward-thinking IT consulting firm dedicated to helping businesses navigate the complexities of digital transformation. Our mission is to deliver innovative, scalable solutions that drive measurable results.
                                                    Whether you're a startup looking to establish your tech infrastructure or an enterprise seeking to modernize legacy systems, 
                                                    we have the expertise and passion to make it happen.</p>
            </div>

            <div className="right-content">
                <div className="benefit-grid">
                    {BENEFITS.map((benefit, index)=>(
                        <Card key={index} variant="feature-small" title={benefit.title} description={benefit.description} />
                    ))}
                </div>
            </div>

        </SplitSection>

        <div className="section4">

            <button className="caption2">Our Work</button>
                    <header>
                        <h1 className="hero-title2">Featured Projects</h1>
                    </header>

                    <p className="paragraph2">
                        Discover how we've helped businesses across various industries achieve their technology goals through innovative solutions and expert consulting.
                    </p>

                    <div className="card-container">
                        {PROJECTS.map((project) =>(
                            <Card key = {project.id} variant= "project" title = {project.title} description={project.description} imageUrl = {project.imageUrl}
                            />                
                        ))}
                    </div>

                    <p className="paragraph3">
                        Want to see more of our work?
                    </p>

                    <button className="more-projects-button">View More Projects</button>
        </div>

        <div className="section5">
            <button className="caption3">Get in Touch</button>
            <header>
                <h1 className="hero-title3">Let's Build Something Amazing Together</h1>
            </header>

            <p className="paragraph4">
                Whether you're ready to start a project or just want to learn more...
            </p>

            {/* New wrapper starts here */}
            <div className="contact-container"> 
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="form-input" />
                    <input type="email" placeholder="Your Email" className="form-input" />
                    <textarea placeholder="Your Message" className="form-textarea"></textarea>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>

                <div className="contact-info">
                    <div className="contact-item">
                        <h2 className="contact-title">Contact Information</h2>
                        <p className="contact-detail"><strong>Email:</strong> moctosteeve@gmail.com</p>
                        <p className="contact-detail"><strong>Phone:</strong> +1 (123) 456-7890</p>
                        
                        <h4 className="business_hours">Business Hours</h4>
                        <p className="business-hours">Mon-Fri: 9am-5pm</p>
                        <p className="saturday-hours">Saturday: 10am-2pm</p>
                        <p className="sunday-hours">Sunday: Closed</p>
                    </div>
                </div>
            </div>
            {/* New wrapper ends here */}
        </div>
            
            </>
    );
}
export default Homepage;