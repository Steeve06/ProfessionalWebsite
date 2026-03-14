
import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeaderCenter = ({ caption, title, subtitle, description, align = "center" }) => {
    return (
       
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

export default SectionHeaderCenter;