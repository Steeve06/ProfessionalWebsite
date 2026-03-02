
import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader = ({ caption, title, subtitle, description, align = "left" }) => {
    return (
        // We use a dynamic class for alignment (left, center, or right)
        <div className={`section-header section-header--${align}`}>
            {caption && <button className="caption">{caption}</button>}
            
            <header>
                <h1 className="section-header-title">
                    {title} 
                    {subtitle && <span className="section-header-subtitle"> {subtitle}</span>}
                </h1>
            </header>

            {description && <p className="section-header-description">{description}</p>}
        </div>
    );
};

export default SectionHeader;