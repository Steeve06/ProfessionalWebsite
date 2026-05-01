import { FaCheckCircle } from 'react-icons/fa';
import styles from '../styles/ServiceCard.module.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, features, icon, imageUrl, color, isReversed }) => {
    const cardClasses = `${styles['card-wrapper']} ${isReversed ? styles['reversed'] : ''}`;

    return (
        <div className={cardClasses}>
            <div className={styles['card-visual']}>
                <img src={imageUrl} alt={title} className={styles['card-image']} />
            </div>

            <div className={styles['card-details']}>
                <div
                    className={styles['card-icon-box']}
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>

                <h2 className={styles['card-title']}>{title}</h2>
                <p className={styles['card-description']}>{description}</p>

                <ul className={styles['card-features-list']}>
                    {features?.map((item, i) => (
                        <li key={i} className={styles['feature-item']}>
                            <FaCheckCircle style={{ color, flexShrink: 0 }} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/*
                  Button color comes from the CSS module (.learn-more-btn uses the
                  per-card `color` prop via inline style only on backgroundColor —
                  all other sizing/padding/radius is owned by the module.
                */}
                <Link
                    to="/schedule"
                    className={styles['learn-more-btn']}
                    style={{ backgroundColor: color }}
                >
                    Learn More →
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;