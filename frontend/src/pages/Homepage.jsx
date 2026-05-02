import React, { useState, useCallback } from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import img from "../assets/img.png";
import { SERVICES_DATA } from "../services/services";
import { BENEFITS } from "../services/benefits";
import { SplitSection } from "../components/SplitSection";
import { PROJECTS } from "../services/projects";
import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import TurnstileWidget from "../components/TurnstileWidget";
import '../styles/Homepage.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { API_ENDPOINTS } from '../api/config';

const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const Homepage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [turnstileToken, setTurnstileToken] = useState('');
    const [isSubmitting, setIsSubmitting]     = useState(false);

    const handleTurnstileVerify = useCallback((token) => {
        setTurnstileToken(token);
    }, []);

    const handleHomeSubmit = async (e) => {
        e.preventDefault();

        if (!turnstileToken) {
            alert('Please complete the human verification before submitting.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(API_ENDPOINTS.CONSULTATION, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, cf_turnstile_response: turnstileToken }),
            });

            if (response.ok) {
                alert('Thank you! We have received your message.');
                setFormData({ name: '', email: '', company: '', message: '' });
                setTurnstileToken('');
                if (window.turnstile) window.turnstile.reset();
            } else {
                const errorData = await response.json();
                alert(errorData?.error || 'Submission failed. Please try again.');
            }
        } catch (error) {
            alert('Server is unreachable. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="Homepage">
                <SplitSection className="section1">
                    <div className="left-content1">
                        <SectionHeader caption="Your Technology Partner" title="Transform Your" subtitle="Digital Future" />
                        <p className="section3-paragraph">MoctoTech helps businesses streamline operations, enhance productivity, and drive growth through innovative technology solutions.</p>

                        <div className="features">
                            <Link to="/schedule" style={{ textDecoration: 'none' }}>
                                <button className="cta-button">Get Started <span className="arrow">→</span></button>
                            </Link>
                            <Link to="/services" style={{ textDecoration: 'none' }}>
                                <button className="our-services-button">Our Services</button>
                            </Link>
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

            <div className="section2">
                <header className="section2-header">
                    <span className="section2-title">Our Services</span>
                    <h1 className="section2-subtitle">Comprehensive IT Solutions</h1>
                    <p className="section2-paragraph">From strategy to implementation, we provide end-to-end technology services that help businesses thrive in the digital age.</p>
                </header>
                <div className="card-container2">
                    {SERVICES_DATA.map((service) => (
                        <Card key={service.id} variant="service" title={service.title} description={service.description} icon={service.icon} />
                    ))}
                </div>
            </div>

            <SplitSection className="section3">
                <div className="left-content">
                    <span className="section3-caption">Why Choose MoctoTech</span>
                    <SectionHeader title="Your Trusted Technology" subtitle="Partner" />
                    <p className="section3-paragraph">We are a forward-thinking IT consulting firm dedicated to helping businesses navigate the complexities of digital transformation. Our mission is to deliver innovative, scalable solutions that drive measurable results. Whether you're a startup looking to establish your tech infrastructure or an enterprise seeking to modernize legacy systems, we have the expertise and passion to make it happen.</p>
                </div>
                <div className="right-content">
                    <div className="benefit-grid">
                        {BENEFITS.map((benefit, index) => (
                            <Card key={index} variant="benefit" title={benefit.title} description={benefit.description} icon={benefit.icon} />
                        ))}
                    </div>
                </div>
            </SplitSection>

            <div className="section4">
                <span className="section4-caption">Our Work</span>
                <header>
                    <h1 className="section4-title">Featured Projects</h1>
                </header>
                <p className="section4-paragraph">
                    Discover how we've helped businesses across various industries achieve their technology goals through innovative solutions and expert consulting.
                </p>
                <div className="section4-container">
                    {PROJECTS.map((project) => (
                        <Card key={project.id} variant="project" tag={project.tag} title={project.title} description={project.description} imageUrl={project.imageUrl} />
                    ))}
                </div>
                <p className="section4-paragraph">Want to see more of our work?</p>
                <button className="more-projects-button" onClick={() => navigate('/projects')}>
                    View More Projects
                </button>
            </div>

            <div className="section5">
                <span className="caption3">Get in Touch</span>
                <header>
                    <h1 className="section5-title">Let's Build Something Amazing Together</h1>
                </header>
                <p className="section5-paragraph">
                    Whether you're ready to start a project or just want to learn more, we'd love to hear from you.
                </p>

                <div className="contact-container">
                    <form className="contact-form" onSubmit={handleHomeSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                                type="text"
                                placeholder="Your Company"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                placeholder="Tell us about your project..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <TurnstileWidget
                            siteKey={TURNSTILE_SITE_KEY}
                            onVerify={handleTurnstileVerify}
                            theme="light"
                        />

                        <button
                            type="submit"
                            className="cta-button"
                            disabled={isSubmitting || !turnstileToken}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <div className="contact-info-container">
                        <div className="contact-item">
                            <div className="contacts">
                                <h2 className="contact-title">Contact Information</h2>
                                <div className="contact-method-row">
                                    <div className="icon-box"><FaEnvelope /></div>
                                    <div className="contact-text">
                                        <strong>Email Us</strong>
                                        <p>moctosteeve@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-method-row">
                                    <div className="icon-box"><FaPhone /></div>
                                    <div className="contact-text">
                                        <strong>Call Us</strong>
                                        <p>Schedule Call</p>
                                    </div>
                                </div>
                                <div className="contact-method-row">
                                    <div className="icon-box"><FaLinkedin /></div>
                                    <div className="contact-text">
                                        <strong>LinkedIn</strong>
                                        <a className="linkedin" href="https://www.linkedin.com/in/steeve-mocto-024429268/" target="_blank" rel="noopener noreferrer">Steeve Mocto</a>
                                    </div>
                                </div>
                            </div>

                            <div className="business-hours-container">
                                <h4 className="business_title">Business Hours</h4>
                                <div className="hours-row">
                                    <span>Monday – Friday</span>
                                    <span>9:00 AM – 6:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span>Saturday</span>
                                    <span>10:00 AM – 2:00 PM</span>
                                </div>
                                <div className="hours-row">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepage;