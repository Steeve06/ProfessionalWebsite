import React from 'react';
import '../styles/SectionHeader.css';

const SectionHeader = ({ caption, title, subtitle, description, align = 'left' }) => {
    return (
        <div className={`section-header section-header--${align}`}>
            {/* span: purely decorative label, not an interactive control */}
            {caption && <span className="caption">{caption}</span>}

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