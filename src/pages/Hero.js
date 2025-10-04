import styles from "../style/Hero.module.css";
import heroImage from "../assets/images/mobileIcon.png";
import rectangle1 from "../assets/images/Rectangle1.svg";
import rectangle2 from "../assets/images/Rectangle2.svg";

const Hero = () => {
  return (
    <div className={styles.hero1}>
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${rectangle1}), url(${rectangle2})`,
      }}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroImage}>
          <img
            src={heroImage}
            alt="App Development"
            className={styles.image}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Leading the way in <span>App Development</span> Innovation
          </h1>
          <p className={styles.heroText}>
            We specialize in creating cutting-edge mobile and web applications that drive business growth. 
            Our team of expert developers delivers scalable, user-friendly solutions tailored to your unique needs.
          </p>
          <button className={styles.quoteBtn}>Get a Free Quote</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
