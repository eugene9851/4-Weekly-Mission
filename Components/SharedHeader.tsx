import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import styles from "@/styles/header.module.css";
import Link from "next/link";

interface SharedHeaderProps {
  profile?: {
    email: string;
    image: string;
  };
  folder?: {
    profileImage: string;
    profileName: string;
    folderName: string;
  };
}
export function SharedHeader({ profile, folder }: SharedHeaderProps) {
  return (
    <>
      <div className={styles.headerArea}>
        <nav>
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
        <header>
          <div className={styles.folderProfile}>
            <Image
              width={15}
              height={15}
              src={folder?.profileImage ?? ""}
              alt="폴더소유자프로필사진"
              className={styles.folderImg}
            />
            <p className={styles.folderProfileName}>{folder?.profileName}</p>
            <h2 className={styles.folderName}>{folder?.folderName}</h2>
          </div>
        </header>
      </div>
    </>
  );
}
