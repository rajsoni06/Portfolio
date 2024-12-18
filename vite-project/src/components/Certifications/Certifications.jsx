import React from 'react';
import styles from './Certifications.module.css';

export const Certifications = () => {
  return (
    <section id="certifications" className={styles.certificationSection}>
      <h2>CERTIFICATIONS</h2> <br />
      <div className={styles.certificationContainer}>
        <ul>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1Uzn635U0TVS8688LZbVZBt0AYM2hKiU_/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              AZ-900 Microsoft Azure Fundamentals Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1VG5FUXIlRf2cnsadgDihJJCDqq1t1PD3/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              ServiceNow System Administrator Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1Vebbw5_Q2Ep_zfAe3LFxLT9nncban6du/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              Web APIs (REST API, GraphQL, gRPC) Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/11iSaJGrbNL0TvseXKfT6EyYg7rxJBftu/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
            Google Cloud Machine Learning Engineer Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/1VqVXa7i8C_MVKdNsJJrIQzvTFKtnR5mp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              DevOps & DevSecOps Certification
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/file/d/12Ro52YDYFfrA1QI2qgMoV-ttPysZZ8RZ/view" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              EPAM Certification in Front-end Technologies
            </a>
          </li>
          <li className={styles.certificationItem}>
            <a href="https://drive.google.com/drive/folders/1VVKnrEgYbwA4FVP-4zAL2Dy_nOS5I5Bj" target="_blank" rel="noopener noreferrer" className={styles.certificationLink}>
              More Certifications...
            </a>
          </li> <br />

          <li className={styles.AchievementsItem }>
            <a href="https://drive.google.com/drive/folders/1WPsPYwP7gW3GCiRpdgHJJagsO59D6Yal" target="_blank" rel="noopener noreferrer" className={styles.AchievementsLink}>
            Achievements 
            </a>
          </li>

        </ul>
      </div>
    </section>
  );
};
