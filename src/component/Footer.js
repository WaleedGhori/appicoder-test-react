import styles from "../style/Footer.module.css";
import appicoders from "../assets/images/appicoderfooter.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.contactColumn}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <img src={appicoders} alt="Service" className={styles.image} />
            </div>
          </div>

          <h3 className={styles.contactTitle}>Contact Us</h3>
          <p className={styles.contactDetail}>Tel: +1 (800) 626-8812</p>
          <p className={styles.contactDetail}>Email: info@appicoders.com</p>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className={styles.aboutColumn}>
          <h3 className={styles.columnTitle}>About</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>

        <div className={styles.servicesColumn}>
          <h3 className={styles.columnTitle}>Appicoders Services</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">• IPHONE APPLICATION DEVELOPMENT</a>
            </li>
            <li>
              <a href="#">• ANDROID APPLICATION DEVELOPMENT</a>
            </li>
            <li>
              <a href="#">• ENTERPRISE APP DEVELOPMENT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        <p>© 2025 APPICODERS. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
};

export default Footer;
