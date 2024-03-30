import { useEffect, useRef, useState } from "react";
import { FolderHeader } from "../Components/FolderHeader";
import { Footer } from "../Components/Footer";
import { FolderMain } from "../Components/FolderMain";
import { getUserData } from "./api/FolderPageApi";
import { Profile } from "./api/FolderPageApi";
import AddLinkBar from "../Components/addLinkBar";
import styles from "../styles/footer.module.css";

export default function FolderPage() {
  const [profile, setProfile] = useState<Profile>();
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  const addLinkBarTopRef = useRef<HTMLDivElement>(null);
  const addLinkBarFooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getUserData()
      .then((res) => setProfile(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const topOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0],
    };

    const handleTopIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          styles.fixedAddLinkBar,
          !entry.isIntersecting
        );
        setIsTopVisible(!entry.isIntersecting);
        if (!entry.isIntersecting) isTop.unobserve(entry.target);
      });
    };
    const isTop = new IntersectionObserver(handleTopIntersection, topOptions);
    if (addLinkBarTopRef.current) {
      isTop.observe(addLinkBarTopRef.current);
    }

    return () => {
      if (addLinkBarTopRef.current) {
        isTop.unobserve(addLinkBarTopRef.current);
        isTop.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleFooterIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(styles.hideFixedAddLinkBar);
        setIsFooterVisible(!entry.isIntersecting);
        if (entry.isIntersecting) ioFooter.unobserve(entry.target);
      });
    };

    const footerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.1],
    };

    const ioFooter = new IntersectionObserver(
      handleFooterIntersection,
      footerOptions
    );

    if (addLinkBarFooterRef.current) {
      ioFooter.observe(addLinkBarFooterRef.current);
    }
    return () => {
      if (addLinkBarTopRef.current) {
        ioFooter.unobserve(addLinkBarTopRef.current);
        ioFooter.disconnect();
      }
    };
  }, []);

  return (
    <>
      <FolderHeader profile={profile} />

      <main>
        <div ref={addLinkBarTopRef}>
          <AddLinkBar />
        </div>
        <FolderMain />
      </main>

      <div ref={addLinkBarFooterRef}>
        <Footer />
      </div>
    </>
  );
}
