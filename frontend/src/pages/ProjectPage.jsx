import React, { useState, useEffect } from 'react'; // Added Hooks
import SectionHeaderCenter from '../components/SectionHeaderCenter';
import ProjectCard from '../components/ProjectCard'; 
import Footer from '../components/Footer';
import styles from '../styles/ProjectPage.module.css';
import BASE_URL from '../api/config';

const ProjectPage = () => {
    // 1. Create state to hold our dynamic projects
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // 2. Fetch data from Django when the component mounts
    useEffect(() => {
        fetch(`${BASE_URL}/api/projects/`)
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    }, []);

    // Guard clause for Loading state
    if (loading) {
        return <div className={styles.emptyState}><p>Loading projects...</p></div>;
    }

    // Guard clause for Empty state
    if (projects.length === 0) {
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
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            category={project.tag}
                            description={project.description}
                            // Note: If Django returns a relative path like /media/..., 
                            // you might need 'http://127.0.0.1:8000' + project.image
                            imageUrl={project.image.startsWith('http') ? project.image : `${BASE_URL}${project.image}`}
                            tags={project.tech_tags ? project.tech_tags.split(',') : []} 
                        />
                    ))}
                </section>
            </div>

            <Footer />
        </>
    );
};

export default ProjectPage;