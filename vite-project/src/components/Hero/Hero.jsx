import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import myPic from "../../../assets/hero/My_Pic.jpg"; // Import the image directly

export const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count >= 14) return;

    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 150);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className={styles.container}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source src="assets/hero/Space-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <br />
        <h1 className={styles.title}>Hi, I'm Raj Anand Soni</h1>
        <p className={styles.description}>
          Software Developer @Cognizant | Ex-SDE Intern @PrepBytes | DevOps Engineer | Azure & AWS Certified | MERN Stack Developer | Python & C++ Enthusiast | Gen AI | Global Collab 🇮🇳 🇯🇵 🇻🇬.
          <br /><br />
          I specialize in software development and DevOps, focusing on building scalable applications and optimizing deployment processes.
        </p>
        <a href="https://www.linkedin.com/in/raj-anand-soni-037541212" className={styles.connectBtn}>
          Connect +
        </a>
        <button className={styles.hackathonButton}>
          Participated in {count} Hackathons
        </button>
      </div>
      <img
        src={myPic} // Use the imported image
        alt="Hero image of Raj Anand Soni"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};