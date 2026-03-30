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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Meeting Scheduled:', formData);
        alert('Thank you! Your call has been scheduled.');
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
                            <input type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Date</label>
                                <input type="date" required onChange={(e) => setFormData({...formData, date: e.target.value})} />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Preferred Time</label>
                                <input type="time" required onChange={(e) => setFormData({...formData, time: e.target.value})} />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>How can we help?</label>
                            <textarea rows="4" onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Confirm Meeting</button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SchedulePage;