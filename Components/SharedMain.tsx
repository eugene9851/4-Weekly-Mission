import searchIcon from "@/public/images/search.svg";
import { Card } from "./Card";
import { CardLinks } from "@/useHooks/useSampleFolder";
import closeIcon from "@/public/images/close.svg";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/main.module.css";

export function SharedMain({ cards }: { cards: CardLinks[] }) {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputValue = () => {
    setSearchInput("");
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const lowerQuery = searchInput.toLowerCase();
  const filteredLinks = cards.filter(
    (card) =>
      card.url?.toLowerCase().includes(lowerQuery) ||
      card.title?.toLowerCase().includes(lowerQuery) ||
      card.description?.toLowerCase().includes(lowerQuery)
  );
  const linkArray = filteredLinks ? filteredLinks : cards;

  return (
    <>
      <div className={styles.mainArea}>
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

        <div className={styles.cardGrid}>
          {linkArray &&
            linkArray.map((card) => (
              <Card key={card.id} cardInfo={card}></Card>
            ))}
        </div>
      </div>
    </>
  );
}
