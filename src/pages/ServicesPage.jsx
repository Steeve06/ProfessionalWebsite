import { OUR_SERVICES } from "../services/OurServices";
import ServiceCard from "../components/ServiceCard";
import '../styles/ServicesPage.css';
import SectionHeaderCenter from "../components/SectionHeaderCenter";

const ServicesPage = () => {
    // Early Return Pattern: Keeps the main JSX clean
    if (!OUR_SERVICES?.length) {
        return <p className="error-message">No services available at this time.</p>;
    }

    return (
        <section className="services-section">
            
            {/* This component now handles the entire intro for the section */}
            <SectionHeaderCenter
                caption="Our Expertise"
                title="Comprehensive IT Solutions"
                subtitle="Tailored for Your Business Success"
                description="Explore our wide range of IT services designed to drive innovation, enhance security, and optimize your operations."
            />

            {/* Map over services using 'index' for the zig-zag layout */}
            {OUR_SERVICES.map((service, index) => (
                <ServiceCard
                    key={service.id}
                    {...service} 
                    isReversed={index % 2 !== 0} 
                />
            ))}
            
        </section>
    );
};

export default ServicesPage;