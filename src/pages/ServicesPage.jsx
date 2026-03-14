import { OUR_SERVICES } from "../services/OurServices";
import ServiceCard from "../components/ServiceCard";
import '../styles/ServicesPage.css';

const ServicesPage = () => {
    // Early Return Pattern: Keeps the main JSX clean
    if (!OUR_SERVICES?.length) {
        return <p className="error-message">No services available at this time.</p>;
    }

    return (
        <section className="services-section" aria-labelledby="services-title">
            <h2 id="services-title">Our IT Solutions</h2>
            {OUR_SERVICES.map((service) => (
                    <ServiceCard 
                        key={service.id} 
                        {...service} // Spread operator: passes all keys as props automatically
                        isReversed={service.id % 2 !== 0}
                    />
                ))
            }
        </section>
    );
};

export default ServicesPage;