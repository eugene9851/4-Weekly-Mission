import logo from "@/public/images/logo.svg";
import { Profile } from "../pages/api/FolderPageApi";
import Image from "next/image";
import styles from "@/styles/header.module.css";

interface Props {
  profile?: Profile;
}

export function FolderHeader({ profile }: Props) {
  return (
    <>
      <header className={styles.headerArea}>
        <nav className={styles.nav}>
          <div className={styles.navBar}>
            <a href="index.html">
              <Image
                width={133}
                height={24}
                src={logo}
                alt="logo"
                className={styles.logo}
              />
            </a>
            {profile?.email ? (
              <div className={styles.profile}>
                <Image
                  width={20}
                  height={15}
                  src={profile.image || ""}
                  alt="userProfileImg"
                  className={styles.profileImg}
                />
                <span className={styles.userEmail}>{profile.email}</span>
              </div>
            ) : (
              <a
                href="../Pages/signIn.html"
                className={(styles.btn, styles.btnS)}
              >
                로그인
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
