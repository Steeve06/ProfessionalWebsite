const Card = ({ tag, title, description, icon, imageUrl, variant = 'default', children }) => {
    const cardClass = `card card--${variant}`;

    return (
        <div className={cardClass}>
            {icon && <div className="card-icon">{icon}</div>}

            {imageUrl && (
                <div className="card-image-container">
                    <img src={imageUrl} alt={title || ''} className="card-image" />
                </div>
            )}

            {/* Wrap text content for project cards so padding is scoped correctly */}
            <div className="card-content">
                {tag && <span className="card-tag">{tag}</span>}
                {/* h3 is correct here — SectionHeader h1/h2 already establish hierarchy */}
                <h3 className="card-title">{title}</h3>
                {description && <p className="card-description">{description}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;