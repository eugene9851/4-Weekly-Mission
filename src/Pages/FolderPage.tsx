import { useEffect, useState } from "react";
import { FolderHeader } from "../Components/FolderHeader";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { getUserData } from "../APIs/FolderPageApi";
import "../styles/Page.css";
import { Profile } from "../APIs/FolderPageApi";

export function FolderPage() {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getUserData();
    setProfile(userData);
  };

  return (
    <>
      <FolderHeader profile={profile} />
      <FolderMain />
      <Footer />
    </>
  );
}
