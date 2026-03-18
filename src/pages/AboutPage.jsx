import React from "react";
import { FaUsers} from "react-icons/fa";
import SectionHeaderCenter from "../components/SectionHeaderCenter";
import Footer from "../components/Footer";
import img from "../assets/moctotech-team.jpg";
import styles from "../styles/AboutPage.module.css";
import { JOURNEY_DATA } from "../services/JourneyData";

const AboutPage = () => {
    return (
        <>
            <div className="about-page">
                <section className="about-hero">
                    <SectionHeaderCenter
                        caption="About MoctoTech"
                        title="Your Dedicated"
                        subtitle="Technology Partner"
                    />
                </section>
            </div>

            <section className={styles.biography}>
                <div className={styles.container}>
                    
                    
                    <div className={styles.header1}>
                        <div className={styles.iconBox1}>
                            <FaUsers />
                        </div>
                        <h2 className={styles.sectionLabel1}>Biography</h2>
                    </div>

                    <div className={styles.mainContent}>
                        {/* 2. Left Column: Title and Text */}
                        <div className={styles.leftColumn}>
                            <h3 className={styles.mainTitle1}>
                                Hi, I'm an IT Consultant Who Actually Cares About Your Success.
                            </h3>
                            <p className={styles.description}>
                                I am a software engineer and technology consultant with over 2.5 years of experience helping businesses use technology to solve real problems, 
                                streamline their operations, and reach their goals.
                                <br /><br />
                                My journey in tech started with a simple question: How can a few lines of code change someone's world? 
                                That curiosity took me from my first “Hello World” to building enterprise systems. Today, I have worked independently,
                                offering consulting services that blend big company expertise with the kind of personal attention you only get from a dedicated, hands-on partner.
                                <br /><br />
                                What motivates me is not just solving technical problems, but it is really understanding your business, your goals, and your constraints,
                                then building solutions that actually make a difference. Whether you are a startup shaping your first MVP or an established company modernizing your systems, 
                                I bring both strong technical skills and a practical business mindset to every project.
                            </p>
                        </div>

                        {/* 3. Right Column: Image */}
                        <div className={styles.rightColumn}>
                            <img 
                                src={img} 
                                alt="IT Consultant" 
                                className={styles.image} 
                            />
                        </div>
                    </div>

                </div>
            </section>
            <section className={styles.timelineSection}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>My Journey</h2>
                    <p className={styles.subtitle}>The path from passionate beginner to trusted consultant</p>
                </div>

                <div className={styles.timelineContainer}>
                    {/* The Vertical Center Line */}
                    <div className={styles.centralLine}></div>

                    {JOURNEY_DATA.map((item, index) => (
                        <div 
                            key={index} 
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                        >
                            {/* The Card Content */}
                            <div className={styles.card}>
                                <span className={styles.year}>{item.year}</span>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardText}>{item.text}</p>
                            </div>

                            {/* The Icon Node on the Line */}
                            <div 
                                className={styles.node} 
                                style={{ backgroundColor: item.color }}
                            >
                                {item.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="page-wrapper">
                <Footer />
            </div>
        </>
    );
};

export default AboutPage;
