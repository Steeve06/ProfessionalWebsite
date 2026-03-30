import React, { useState } from 'react'; // 1. Added useState
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, category, description, videoUrl, imageUrl, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 2. State for modal

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <article className={styles.card} onClick={toggleModal} style={{ cursor: 'pointer' }}>
        <div className={styles.mediaContainer}>
          {videoUrl ? (
            <video 
              src={videoUrl} 
              muted loop autoPlay playsInline 
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
          {/* This paragraph should have the CSS line-clamp from before */}
          <p className={styles.description}>{description}</p>
          
          <div className={styles.tagList}>
            {tags?.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
          
          <button className={styles.readMoreBtn}>View Full Case Study →</button>
        </div>
      </article>

      {/* --- MODAL SECTION --- */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={toggleModal}>&times;</button>
            
            <div className={styles.modalMedia}>
               {/* Reusing your media logic for the popup */}
               {videoUrl ? (
                <video src={videoUrl} controls autoPlay className={styles.fullMedia} />
              ) : (
                <img src={imageUrl} alt={title} className={styles.fullMedia} />
              )}
            </div>

            <div className={styles.modalInfo}>
              <span className={styles.categoryBadgeModal}>{category}</span>
              <h2 className={styles.modalTitle}>{title}</h2>
              <div className={styles.modalTags}>
                {tags?.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
              </div>
              <hr className={styles.divider} />
              <p className={styles.fullDescription}>{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;