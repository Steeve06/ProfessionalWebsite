import { OUR_SERVICES } from "../services/OurServices";
import { PROCESS_STEPS } from "../services/ProcessSection";
import ServiceCard from "../components/ServiceCard";
import '../styles/ServicesPage.css';
import styles from '../styles/ProcessSection.module.css';
import SectionHeaderCenter from "../components/SectionHeaderCenter";
import Footer from "../components/Footer";

const ServicesPage = () => {
    // Early Return Pattern: Keeps the main JSX clean
    if (!OUR_SERVICES?.length) {
        return <p className="error-message">No services available at this time.</p>;
    }

    return (
        <>
            {/* This component now handles the entire intro for the section */}
                <SectionHeaderCenter
                    caption="Our Expertise"
                    title="Comprehensive IT Solutions"
                    subtitle="Tailored for Your Business Success"
                    description="Explore our wide range of IT services designed to drive innovation, enhance security, and optimize your operations."
                    showButton={true}
                />
                
            <section className="services-section">


                {/* Map over services using 'index' for the zig-zag layout */}
                {OUR_SERVICES.map((service, index) => (
                    <ServiceCard
                        key={service.id}
                        {...service} 
                        isReversed={index % 2 !== 0} 
                    />
                ))}
                
            </section>

        <section className={styles.section} style={{background: 'radial-gradient(circle at top right, rgba(238, 230, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 240, 245, 1) 100%)'}}>
                <div style={{ textAlign: 'center', marginTop: '0'}}>
                    <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>How We Work</h1>
                    <p className={styles.text} style={{ fontSize: '1.2rem' }}>Our Methodology ensures successful project delivery.</p>
                </div>

                {/* ESSENTIAL: This wrapper provides the flex context for the line */}
                <div className={styles.container}>
                    {PROCESS_STEPS.map((step, index) => (
                        <div key={step.id} className={styles.stepWrapper}>
                            <div className={styles.card}>
                                <div className={styles.iconBox} style={{ backgroundColor: step.color }}>
                                    {step.icon}
                                </div>
                                <h3 className={styles.title}>{step.title}</h3>
                                <p className={styles.text}>{step.text}</p>
                                <span className={styles.number}>0{index + 1}</span>
                            </div>

                            {/* Line logic: Only show between cards */}
                            {index < PROCESS_STEPS.length - 1 && (
                                <div className={styles.connectorLine} />
                            )}
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

export default ServicesPage;