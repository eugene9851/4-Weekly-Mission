import React from "react";
import facebook from "@/public/images/facebook.svg";
import twitter from "@/public/images/twitter.svg";
import youtube from "@/public/images/youtube.svg";
import instagram from "@/public/images/instagram.svg";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footerBox">
          <div className="copyRight">©codeit - 2023</div>
          <div className="links">
            <a href="/privacy" className="link">
              Privacy Policy
            </a>
            <a href="/faq" className="link">
              FAQ
            </a>
          </div>
          <div className="sns">
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
