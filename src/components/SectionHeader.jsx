
import React from 'react';

const SectionHeader = ({ caption, title, subtitle, description, align = "left" }) => {
    return (
        // We use a dynamic class for alignment (left, center, or right)
        <div className={`section-header section-header--${align}`}>
            {caption && <button className="caption">{caption}</button>}
            
            <header>
                <h1 className="hero-title">
                    {title} 
                    {subtitle && <span className="hero-subtitle"> {subtitle}</span>}
                </h1>
            </header>

            {description && <p className="paragraph">{description}</p>}
        </div>
    );
};

export default SectionHeader;