import styles from "../style/CaseStudy.module.css"; 
import caseBg from "../assets/images/dinner.svg"; 

const CaseStudy = () => {
  return (
    <div
      className={styles.caseStudy}
      style={{ backgroundImage: `url(${caseBg})` }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>Case Studies</h2>
        <p className={styles.text}>
          Explore how we’ve helped clients transform their businesses with our
          innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
