import React, { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, category, description, videoUrl, imageUrl, tags }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(prev => !prev);

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
                        <img src={imageUrl} alt={title} className={styles.media} />
                    )}
                    <div className={styles.categoryBadge}>{category}</div>
                </div>

                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.tagList}>
                        {tags?.map(tag => (
                            <span key={tag} className={styles.tag}>#{tag}</span>
                        ))}
                    </div>

                    <button className={styles.readMoreBtn}>View Full Case Study →</button>
                </div>
            </article>

            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={toggleModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={toggleModal}>&times;</button>

                        {videoUrl ? (
                            <video src={videoUrl} controls autoPlay className={styles.fullMedia} />
                        ) : (
                            <img src={imageUrl} alt={title} className={styles.fullMedia} />
                        )}

                        <div className={styles.modalInfo}>
                            <span className={styles.categoryBadge}>{category}</span>
                            <h2 className={styles.title} style={{ marginTop: '0.75rem' }}>{title}</h2>
                            <div className={styles.tagList} style={{ marginBottom: '1rem' }}>
                                {tags?.map(tag => <span key={tag} className={styles.tag}>#{tag}</span>)}
                            </div>
                            <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '1rem 0' }} />
                            <p className={styles.fullDescription}>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectCard;