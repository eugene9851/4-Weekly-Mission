import React from "react";
import facebook from "@/public/images/facebook.svg";
import twitter from "@/public/images/twitter.svg";
import youtube from "@/public/images/youtube.svg";
import instagram from "@/public/images/instagram.svg";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer>
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
              <Image src={facebook} alt="facebook" />
            </a>
            <a href="#" target="_blank">
              <Image src={twitter} alt="twitter" />
            </a>
            <a href="#" target="_blank">
              <Image src={youtube} alt="youtube" />
            </a>
            <a href="#" target="_blank">
              <Image src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
