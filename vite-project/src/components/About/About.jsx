import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <>
       
      {/* About Section */}
      <section className={styles.container} id="about"> <br />
        <h2 className={styles.title}>About</h2> 
        <div className={styles.content}>


          <img
            src={getImageUrl("about/3D_Boy_Officelook_pic.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
             
             <div className={styles.aboutItemText}>
          <h3>Software Developer</h3>
          <p>
            Skilled in C, C++, Python, and MERN Stack. Passionate about building scalable applications.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
   
        <div className={styles.aboutItemText}>
          <h3>Backend Engineer</h3>
          <p>
            Experience in fast, optimized back-end systems, Big Data Analytics, and databases.
          </p>
        </div>
      </li>
      <li className={styles.aboutItem}>
 
        <div className={styles.aboutItemText}>
          <h3>DevOps Engineer</h3>
          <p>
            Proficient in CI/CD, Jenkins, Docker, Kubernetes. Focus on deployment efficiency and system optimization.
          </p>
          <br />
        </div>
      </li>
    </ul>
  </div>
      </section>
    </>
  );
};
