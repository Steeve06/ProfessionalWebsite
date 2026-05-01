import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.socials}>
                    <a href="https://github.com/Steeve06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/steeve-mocto-024429268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:moctosteeve@gmail.com" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>

                <hr className={styles.divider} />

                <div className={styles.bottomRow}>
                    <p className={styles.copyright}>
                        &copy; {currentYear} MoctoTech Consulting LLC. All rights reserved.
                    </p>
                    <div className={styles.legalLinks}>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;