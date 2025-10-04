import { useState, useEffect } from "react";
import styles from "../style/AppNavbar.module.css";
import heroImage from "../assets/images/appicodeLogo.png";

const AppNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src={heroImage}
            alt="Appicoders"
            className={styles.image}
            height={50}
            width={200}
          />
        </div>
        {!isMobile && (
          <ul className={styles.navList}>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>Portfolio</li>
            <li>Products</li>
            <li>Testimonials</li>
            <li>Technologies</li>
            <li>Contact</li>
            <button className={styles.phoneButton}>+1 (088) 2222222</button>
          </ul>
        )}

        {isMobile && (
          <div
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>Portfolio</li>
            <li>Products</li>
            <li>Testimonials</li>
            <li>Technologies</li>
            <li>Contact</li>
            <button className={styles.phoneButton}>+1 (088) 2222222</button>
          </ul>
        </div>
      )}
    </>
  );
};

export default AppNavbar;
