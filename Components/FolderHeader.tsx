import logo from "../images/logo.svg";
import { Profile } from "../pages/api/FolderPageApi";
import Image from "next/image";

interface Props {
  profile?: Profile;
}

export function FolderHeader({ profile }: Props) {
  return (
    <>
      <header className="headerArea">
        <nav>
          <div className="navBar">
            <a href="index.html">
              <Image src={logo} alt="logo" className="logo" />
            </a>
            {profile?.email ? (
              <div className="profile">
                <Image
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
      </header>
    </>
  );
}
