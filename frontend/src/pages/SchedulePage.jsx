import { API_ENDPOINTS } from '../api/config';
import React, { useState, useCallback } from 'react';
import SectionHeaderCenter from '../components/SectionHeaderCenter';
import Footer from '../components/Footer';
import TurnstileWidget from '../components/TurnstileWidget';
import { FaCalendarAlt, FaClock, FaVideo } from 'react-icons/fa';
import styles from '../styles/SchedulePage.module.css';

const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY;

const SchedulePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        message: ''
    });
    const [turnstileToken, setTurnstileToken] = useState('');
    const [isSubmitting, setIsSubmitting]     = useState(false);

    const handleTurnstileVerify = useCallback((token) => {
        setTurnstileToken(token);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!turnstileToken) {
            alert('Please complete the human verification before submitting.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(API_ENDPOINTS.CONSULTATION, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, cf_turnstile_response: turnstileToken }),
            });

            if (response.ok) {
                alert('Thank you! Your request has been recorded in our system.');
                setFormData({ name: '', email: '', date: '', time: '', message: '' });
                setTurnstileToken('');
                if (window.turnstile) window.turnstile.reset();
                e.target.reset();
            } else {
                const errorData = await response.json();
                alert(errorData?.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Connection Error:', error);
            alert('Could not connect to the server. Please try again later.');
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
                    <div className={styles.infoBox}>
                        <h3>What to expect</h3>
                        <ul className={styles.expectationList}>
                            <li><FaVideo /> 30-minute video consultation</li>
                            <li><FaCalendarAlt /> Tailored project roadmap</li>
                            <li><FaClock /> Expert technical advice</li>
                        </ul>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Date</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Preferred Time</label>
                                <input
                                    type="time"
                                    required
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className={styles.formGroup}>
                            <label>How can we help?</label>
                            <textarea
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <TurnstileWidget
                            siteKey={TURNSTILE_SITE_KEY}
                            onVerify={handleTurnstileVerify}
                            theme="light"
                        />

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={isSubmitting || !turnstileToken}
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