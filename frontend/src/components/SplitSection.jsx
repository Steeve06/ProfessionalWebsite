import React from 'react';
import '../styles/SplitSection.css';

export const SplitSection = ({ children, reverse = false, className = '' }) => {
    return (
        <section className={`split-section ${reverse ? 'reverse' : ''} ${className}`.trim()}>
            {children}
        </section>
    );
};