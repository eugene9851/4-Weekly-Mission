import { useState, useEffect } from "react";
import { FolderHeader } from "../Components/FolderHeader";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { getUserData } from "../APIs/PageApi";
import "../styles/Page.css";
import { useFolder } from "../useHooks/useFolder";

export function FolderPage() {
  const [profile, setProfile] = useState({ email: null, image: null });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getUserData();
    setProfile(userData);
  };

  const { folder, cardLinks } = useFolder();

  return (
    <>
      <FolderHeader profile={profile} folder={folder} />
      <FolderMain cards={cardLinks} />
      <Footer />
    </>
  );
}
