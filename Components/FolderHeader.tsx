import logo from "@/public/images/logo.svg";
import { Profile } from "../pages/api/FolderPageApi";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import Link from "next/link";

interface FolderHeaderProps {
  profile?: Profile;
}

export function FolderHeader({ profile }: FolderHeaderProps) {
  return (
    <>
      <header className={styles.headerArea}>
        <nav className={styles.nav}>
          <div className={styles.navBar}>
            <Link href="/">
              <Image
                width={133}
                height={24}
                src={logo}
                alt="logo"
                className={styles.logo}
              />
            </Link>
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
              <Link
                href="../Pages/signIn.html"
                className={(styles.btn, styles.btnS)}
              >
                로그인
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
