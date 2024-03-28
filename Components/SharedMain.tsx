import searchIcon from "@/public/images/search.svg";
import { Card } from "./Card";
import { CardLinks } from "@/useHooks/useSampleFolder";
import closeIcon from "@/public/images/close.svg";
import { useState } from "react";
import Image from "next/image";

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
      <div className="mainArea">
        <form className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
            value={searchInput}
            onChange={handleSearchData}
          ></input>
          <Image src={searchIcon} alt="search" className="searchImg"></Image>
          <Image
            src={closeIcon}
            alt="close"
            className="closeImg"
            onClick={handleInputValue}
          ></Image>
        </form>

        <div className="cardGrid">
          {linkArray &&
            linkArray.map((card) => (
              <Card key={card.id} cardInfo={card}></Card>
            ))}
        </div>
      </div>
    </>
  );
}
