import React from "react";
import facebook from "@/public/images/facebook.svg";
import twitter from "@/public/images/twitter.svg";
import youtube from "@/public/images/youtube.svg";
import instagram from "@/public/images/instagram.svg";
import Image from "next/image";
import styles from "@/styles/footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <div className={styles.copyRight}>©codeit - 2023</div>
          <div className={styles.links}>
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/faq" className={styles.link}>
              FAQ
            </a>
          </div>
          <div className={styles.sns}>
            <a href="#" target="_blank">
              <Image width={20} height={20} src={facebook} alt="facebook" />
            </a>
            <a href="#" target="_blank">
              <Image width={20} height={20} src={twitter} alt="twitter" />
            </a>
            <a href="#" target="_blank">
              <Image width={20} height={20} src={youtube} alt="youtube" />
            </a>
            <a href="#" target="_blank">
              <Image width={20} height={20} src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
