import styles from "../style/Info.module.css";

const Info = () => {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_row}>
        <div className={styles.left_section}>
          <h1 className={styles.main_heading}>
            <span className={styles.highlight}>Applicoders</span> – #<span className={styles.highlight}>1</span>. Mobile App & Web Development Company in USA
          </h1>
        </div>

        <div className={styles.right_section}>
          <div className={styles.description_row}>
            <p className={styles.description}>
              Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows. 
            </p>
            <button className={styles.cta_button}>
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
