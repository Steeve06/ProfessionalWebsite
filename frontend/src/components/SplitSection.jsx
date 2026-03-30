import React from 'react';

export const SplitSection = ({ children, reverse = false, className = "" }) => {
    return (
        <section className={`split-section ${reverse ? 'reverse' : ''} ${className}`}>
            {children} {/* This allows you to put ANY content inside the two halves */}
        </section>
    );
};