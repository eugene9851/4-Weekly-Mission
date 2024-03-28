import React from "react";
import { getFromTime } from "../utils/getFromTime";
import { CardInfo } from "@/useHooks/useSampleFolder";
import Image from "next/image";

const defaultImage = `https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg`;
export function Card({ cardInfo }: { cardInfo: CardInfo }) {
  const { imageSource, createdAt, description, url } = cardInfo;

  //createdAtDate
  const date = new Date(createdAt).toLocaleString();
  const createdAtDate = date
    .split("")
    .slice(0, date.indexOf("오") - 2)
    .join("");

  const src = imageSource ? imageSource : defaultImage;
  const alt = imageSource ? "카드이미지" : "기본이미지";

  return (
    <>
      <a href={url}>
        <div className="card">
          <div className="cardImgSource">
            <Image src={src} alt={alt} className="cardImg"></Image>
          </div>
          <div className="cardContent">
            <p className="createdFrom">{getFromTime(createdAt)}</p>
            <p className="description">{description}</p>
            <p className="createdAt">{createdAtDate}</p>
          </div>
        </div>
      </a>
    </>
  );
}
