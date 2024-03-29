import React from "react";
import { getFromTime } from "../utils/getFromTime";
import { CardInfo } from "@/useHooks/useSampleFolder";
import Image from "next/image";
import styles from "../styles/main.module.css";
import Link from "next/link";

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
      <Link href={url}>
        <div className={styles.card}>
          <div className={styles.cardImgSource}>
            <Image
              width={300}
              height={200}
              src={src}
              alt={alt}
              className={styles.cardImg}
            />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.createdFrom}>{getFromTime(createdAt)}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.createdAt}>{createdAtDate}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
