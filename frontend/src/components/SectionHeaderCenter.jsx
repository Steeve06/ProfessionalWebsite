import styles from '../styles/SectionHeaderCenter.module.css';
import { FaArrowRight } from 'react-icons/fa';

const SectionHeaderCenter = ({ caption, title, subtitle, description, showButton }) => {

    const handleScroll = () => {
        const firstCard = document.querySelector('[class*="card"]');
        if (firstCard) {
            firstCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header className={styles['banner-container']}>
            <div className={styles['banner-content']}>
                {/* span: decorative label, not interactive */}
                {caption && <span className={styles['banner-caption']}>{caption}</span>}

                <h1 className={styles['banner-title']}>{title}</h1>

                {subtitle && <h2 className={styles['banner-subtitle']}>{subtitle}</h2>}

                {description && <p className={styles['banner-description']}>{description}</p>}

                {showButton && (
                    <button className={styles['banner-cta']} onClick={handleScroll}>
                        Explore Our Services
                        <FaArrowRight className={styles['cta-icon']} />
                    </button>
                )}
            </div>
        </header>
    );
};

export default SectionHeaderCenter;