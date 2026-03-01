const Card = ({title, description, imageUrl, variant = "default", children}) => {
    const cardClass = `card card--${variant}`;

    return (
        <div className={cardClass}>
            <h2 className="card-title">{title}</h2> 
            <p className="card-description">{description}</p>
            {children}
        </div>
    );
};

export default Card;