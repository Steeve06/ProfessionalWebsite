import React, { useState } from 'react';
import SectionHeaderCenter from '../components/SectionHeaderCenter';
import Footer from '../components/Footer';
import { FaCalendarAlt, FaClock, FaVideo } from 'react-icons/fa';
import styles from '../styles/SchedulePage.module.css'; 

const SchedulePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });

    // Add state for UX feedback
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/consultations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your request has been recorded in our system.');
                // Clear the form
                setFormData({ name: '', email: '', date: '', time: '', message: '' });
                e.target.reset(); 
            } else {
                const errorData = await response.json();
                alert(`Something went wrong: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error('Connection Error:', error);
            alert('Could not connect to the server. Is Django running?');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="schedule-page">
            <SectionHeaderCenter 
                caption="Let's Connect"
                title="Schedule a"
                subtitle="Discovery Call"
            />

            <section className={styles.scheduleContainer}>
                <div className={styles.grid}>
                    {/* Left side: Information */}
                    <div className={styles.infoBox}>
                        <h3>What to expect?</h3>
                        <ul className={styles.expectationList}>
                            <li><FaVideo /> 30-minute video consultation</li>
                            <li><FaCalendarAlt /> Tailored project roadmap</li>
                            <li><FaClock /> Expert technical advice</li>
                        </ul>
                    </div>

                    {/* Right side: Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input 
                                type="text" 
                                required 
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})} 
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input 
                                type="email" 
                                required 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                            />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Date</label>
                                <input 
                                    type="date" 
                                    required 
                                    value={formData.date}
                                    onChange={(e) => setFormData({...formData, date: e.target.value})} 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Preferred Time</label>
                                <input 
                                    type="time" 
                                    required 
                                    value={formData.time}
                                    onChange={(e) => setFormData({...formData, time: e.target.value})} 
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>How can we help?</label>
                            <textarea 
                                rows="4" 
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className={styles.submitBtn}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Scheduling...' : 'Confirm Meeting'}
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SchedulePage;