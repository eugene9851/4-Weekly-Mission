import { useState, useEffect } from "react";
import { SharedHeader } from "../Components/SharedHeader";
import { Footer } from "../Components/Footer";
import { SharedMain } from "../Components/SharedMain";
import { getSampleData } from "../APIs/SharePageApi";
import "../styles/Page.css";
import { useSampleFolder } from "../useHooks/useSampleFolder";

export function SharedPage() {
  const [profile, setProfile] = useState({ email: null, image: null });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userData = await getSampleData();
    setProfile(userData);
  };

  const { folder, cardLinks } = useSampleFolder();

  return (
    <>
      <SharedHeader profile={profile} folder={folder} />
      <SharedMain cards={cardLinks} />
      <Footer />
    </>
  );
}
