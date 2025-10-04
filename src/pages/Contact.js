import React from 'react';
import styles from '../style/Contact.module.css';
import imageUrl from '../assets/images/contactside.png'
const Contact = () => {
    // Set your image path here:
 

    return (
        <div className={styles.container}>
            <div className={styles.formSection}>
                <div className={styles.formHeader}>
                    <p className={styles.letstalk}>LET'S TALK</p>
                    <h1 className={styles.heading}>Got an idea? Let's get in touch!</h1>
                    <p className={styles.subtext}>
                        Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
                    </p>
                </div>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Your Name" className={styles.inputField} />
                    <input type="email" placeholder="Email Address" className={styles.inputField} />
                    <input type="tel" placeholder="Phone" className={styles.inputField} />
                    <textarea placeholder="Message" className={`${styles.inputField} ${styles.messageField}`}></textarea>
                    
                    <button type="submit" className={styles.submitButton}>
                        LET'S GET IN TOUCH
                    </button>
                </form>
            </div>
            
            <div className={styles.infoSection} style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className={styles.imageOverlay}>
                    <p className={styles.infoText}>
                        Please submit your inquiry and our App Development Strategist will contact you shortly
                    </p>
                    <div className={styles.contactDetails}>
                        <div className={styles.phoneIcon}>📞</div> 
                        <p className={styles.phoneNumber}>+1-(800) 826 8018</p>
                        <p className={styles.emailAddress}>info@appicoders.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;