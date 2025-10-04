import styles from "../style/Service.module.css";
import serviceImg from "../assets/images/servicemook.png";
import Group1 from "../assets/images/Group1.png";
import Group2 from "../assets/images/Group2.png";
import Group3 from "../assets/images/Group3.png";
import Group4 from "../assets/images/Group4.png";
import Group5 from "../assets/images/Group5.png";
import Group6 from "../assets/images/Group6.png";

const data = [
  { title: "Custom Mobile Applications", desc: "iOS, Android and Wearable Apps", imagePath: Group1 },
  { title: "Custom Web Development", desc: "Robust Webs, Progressive Web Apps", imagePath: Group2 },
  { title: "Augmented Reality", desc: "Futuristic AR Apps", imagePath: Group3 },
  { title: "Artificial Intelligence", desc: "Innovative AI & ML Solutions", imagePath: Group4 },
  { title: "Blockchain Development", desc: "Custom Blockchain Solutions", imagePath: Group5 },
  { title: "MVP Development", desc: "For Startups & Entrepreneurs", imagePath: Group6 },
];

const Services = () => {
  return (
    <div className={styles.serviceOut}>
      <div className={styles.serviceIn}>
        <div className={styles.contentContainer}>
          {/* Left Content */}
          <div className={styles.serviceContent}>
            <h2 className={styles.serviceTitle}>Our Services</h2>
            <p className={styles.serviceText}>
              Get to know about what we’re good at.
            </p>

            <div className={styles.servicesGrid}>
              {data.map((item, index) => (
                <div key={index} className={styles.serviceItem}>
                  <img src={item.imagePath} alt={item.title} className={styles.serviceIcon} />
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.serviceImage}>
            <img src={serviceImg} alt="Service" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
