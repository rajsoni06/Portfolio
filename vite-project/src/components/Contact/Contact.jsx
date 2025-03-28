import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}> <br />
        <h2>CONTACT</h2>
        <p>Feel free to reach out!</p>
      </div>
      
      <a href="tel:+918009312017" className={styles.contactButton}>
        Contact: +91 8009312017
      </a> <br />
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:sonirajanand677@gmail.com">Email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            href="https://www.linkedin.com/in/raj-anand-soni-037541212/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a
            href="https://github.com/rajsoni06"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode_icon.png")} alt="LeetCode icon" />
          <a
            href="https://leetcode.com/it20097/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/twitter_icon.png")} alt="Twitter icon" />
          <a
            href="https://x.com/LuckySonicosmos?t=iSMyycj4wQEjl4s98sHHnQ&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp_icon.png")} alt="WhatsApp icon" />
          <a
            href="https://wa.me/qr/MSECXIUNBVMMC1"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
      <div className={styles.footerBottom}>
        <div className={styles.copyright}>
          <p>All rights reserved © 2025</p>
        </div>
        <div className={styles.madeWithLove}>
          <p>Made with ❤ by Raj Anand Soni</p>
        </div>
      </div>
    </footer>
  );
};
