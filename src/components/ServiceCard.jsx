import { FaCheckCircle } from "react-icons/fa";
import styles from '../styles/ServiceCard.module.css';

// ServiceCard.jsx
const ServiceCard = ({ title, description, features, icon, imageUrl, color, isReversed }) => {
    
    // Create a class string that includes 'reversed' if isReversed is true
    const cardClasses = `${styles['card-wrapper']} ${isReversed ? styles['reversed'] : ''}`;

    return (
        <div className={cardClasses}>
            <div className={styles['card-visual']}>
                <img src={imageUrl} alt={title} className={styles['card-image']} />
            </div>

            <div className={styles['card-details']}>
                {/* Dynamic Icon Color */}
                <div className={styles['card-icon-box']} style={{ backgroundColor: color }}>
                    {icon}
                </div>
                
                <h2 className={styles['card-title']}>{title}</h2>
                <p>{description}</p>
                
                <ul className={styles['card-features-list']}>
                    {features?.map((item, i) => (
                        <li key={i} className={styles['feature-item']}>
                            {/* Dynamic Check Icon Color */}
                            <FaCheckCircle style={{ color: color }} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Dynamic Button Color */}
                <button 
                    className={styles['learn-more-btn']} 
                    style={{ backgroundColor: color }}
                >
                    Learn More →
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;