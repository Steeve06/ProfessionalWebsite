import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, category, description, videoUrl, imageUrl, tags }) => {
  return (
    <article className={styles.card}>
      <div className={styles.mediaContainer}>
        {/* CONDITIONAL RENDERING: Logic for Video vs Image */}
        {videoUrl ? (
          <video 
            src={videoUrl} 
            muted 
            loop 
            autoPlay 
            playsInline 
            className={styles.media}
          />
        ) : (
          <img 
            src={imageUrl || '/placeholder-project.jpg'} 
            alt={title} 
            className={styles.media} 
          />
        )}
        <div className={styles.categoryBadge}>{category}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {/* Professional touch: Tech Tags */}
        <div className={styles.tagList}>
          {tags?.map(tag => (
            <span key={tag} className={styles.tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;