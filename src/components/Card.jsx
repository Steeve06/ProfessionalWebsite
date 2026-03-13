const Card = ({tag, title, description, icon, imageUrl, variant = "default", children}) => {
    const cardClass = `card card--${variant}`;

    return (
        <div className={cardClass}>
            {icon && <div className="card-icon">{icon}</div>}
            {tag && <span className="card-tag">{tag}</span>}
            {imageUrl && (
                <div className="card-image-container">
                    <img src={imageUrl} alt={title} className="card-image" />
                </div>
            )}
            <h2 className="card-title">{title}</h2> 
            <p className="card-description">{description}</p>
            
            {children}
        </div>
    );
};

export default Card;