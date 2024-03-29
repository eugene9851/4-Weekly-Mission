import logo from "@/public/images/logo.svg";
import { Profile } from "../pages/api/FolderPageApi";
import Image from "next/image";

interface Props {
  profile?: Profile;
}

export function FolderHeader({ profile }: Props) {
  return (
    <>
      <header className="headerArea">
        <nav className="nav">
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
                />
                <span className="userEmail">{profile.email}</span>
              </div>
            ) : (
              <a href="../Pages/signIn.html" className="btn btnS">
                로그인
              </a>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
