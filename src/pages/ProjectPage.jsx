import React from 'react';
import SectionHeaderCenter from '../components/SectionHeaderCenter';
import ProjectCard from '../components/ProjectCard'; // Import our new child
import { PROJECTS } from '../services/projects';
import Footer from '../components/Footer';
import styles from '../styles/ProjectPage.module.css';

const ProjectPage = () => {
    // Lead Dev Tip: Guard clauses are great for UX
    if (!PROJECTS || PROJECTS.length === 0) {
        return (
            <div className={styles.emptyState}>
                <p>No projects available at this time. Check back soon!</p>
            </div>
        );
    }

    return (
        <>

        <SectionHeaderCenter
            caption="Portfolio"
            title="Projects That"
            subtitle="Drive Real Results"
            description="Explore how we leverage technology to solve complex business problems."
            showButton={false}
        />

        <div className={styles.pageContainer}>
            
            <section className={styles.projectsGrid}>
                {PROJECTS.map((project) => (
                    <ProjectCard 
                        key={project.id} // Essential for React's reconciliation
                        {...project}     // Spread operator passes all data as props
                    />
                ))}
            </section>

        </div>

        <Footer />
        </>
    );
};

export default ProjectPage;