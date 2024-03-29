import React from "react";
import logo from "@/public/images/logo.svg";
import Image from "next/image";

interface Props {
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
export function SharedHeader({ profile, folder }: Props) {
  return (
    <>
      <div className="headerArea">
        <nav>
          <div className="navBar">
            <a href="index.html">
              <Image
                width={133}
                height={24}
                src={logo}
                alt="logo"
                className="logo"
              />
            </a>
            {profile?.email ? (
              <div className="profile">
                <Image
                  width={15}
                  height={15}
                  src={profile.image || ""}
                  alt="userProfileImg"
                  className="profileImg"
                ></Image>
                <span className="userEmail">{profile.email}</span>
              </div>
            ) : (
              <a href="../Pages/signIn.html" className="btn btnS">
                로그인
              </a>
            )}
          </div>
        </nav>
        <header>
          <div className="folderProfile">
            <Image
              width={15}
              height={15}
              src={folder?.profileImage || ""}
              alt="폴더소유자프로필사진"
              className="folderImg"
            />
            <p className="folderProfileName">{folder?.profileName}</p>
            <h2 className="folderName">{folder?.folderName}</h2>
          </div>
        </header>
      </div>
    </>
  );
}
