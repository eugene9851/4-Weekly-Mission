import { useState } from "react";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { useFolder } from "../useHooks/useFolder";
import { useLinks } from "../useHooks/useLinks";
import searchIcon from "@/public/images/search.svg";
import closeIcon from "@/public/images/close.svg";
import Image from "next/image";
import styles from "@/styles/main.module.css";

export function FolderMain() {
  const { currentMenu, setCurrentMenu } = useFolder();
  const { handleLinks, links } = useLinks();
  const [folderCurrentId, setFolderCurrentId] = useState<number>();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleMenuChange = (newMenu: string, id?: number) => {
    setCurrentMenu(newMenu);
    handleLinks(id);
    setFolderCurrentId(id);
  };

  const handleInputValue = () => {
    setSearchInput("");
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const lowerQuery = searchInput.toLowerCase();
  const filteredLinks = links.filter(
    (link) =>
      link.url?.toLowerCase().includes(lowerQuery) ||
      link.title?.toLowerCase().includes(lowerQuery) ||
      link.description?.toLowerCase().includes(lowerQuery)
  );

  const linkArray = filteredLinks ? filteredLinks : links;

  return (
    <>
      <main className={styles.mainArea}>
        <form className={styles.searchArea}>
          <input
            className={styles.searchInput}
            placeholder="링크를 검색해 보세요."
            value={searchInput}
            onChange={handleSearchData}
          ></input>
          <Image
            width={16}
            height={16}
            src={searchIcon}
            alt="search"
            className={styles.searchImg}
          />
          <Image
            width={24}
            height={24}
            src={closeIcon}
            alt="close"
            className={styles.closeImg}
            onClick={handleInputValue}
          />
        </form>

        <FolderMenu onMenuChange={handleMenuChange} />

        <div className={styles.titleBar}>
          <div className={styles.title}>{currentMenu}</div>
          {currentMenu !== "전체" && folderCurrentId && (
            <HandleFolder id={folderCurrentId} />
          )}
        </div>

        {linkArray.length > 0 ? (
          <div className={styles.cardGrid}>
            {linkArray.map((card) => (
              <FolderCard key={card.id} cardInfo={card}></FolderCard>
            ))}
          </div>
        ) : (
          <div className={styles.noLink}>저장된 링크가 없습니다.</div>
        )}
      </main>
    </>
  );
}
