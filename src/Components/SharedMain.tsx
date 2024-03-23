import React from "react";
import searchIcon from "../images/search.svg";
import { Card } from "./Card";
import { CardLinks } from "~/useHooks/useSampleFolder";

export function SharedMain({ cards }: { cards: CardLinks[] }) {
  return (
    <>
      <div className="mainArea">
        <form className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
          ></input>
          <div className="searchIcon">
            <img src={searchIcon} alt="search" className="searchImg"></img>
          </div>
        </form>

        <div className="cardGrid">
          {cards &&
            cards.map((card) => <Card key={card.id} cardInfo={card}></Card>)}
        </div>
      </div>
    </>
  );
}
