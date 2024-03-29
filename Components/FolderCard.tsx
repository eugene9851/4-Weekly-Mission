import React, { useState } from "react";
import { getFromTime } from "../utils/getFromTime";
import favoriteIcon from "@/public/images/favorite.svg";
import kebabIcon from "@/public/images/kebab.svg";
import styles from "../styles/main.module.css";
import { CardKebab } from "./CardKebab";
import { LinkType } from "@/useHooks/useLinks";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cardInfo: LinkType;
}

const defaultImage = `https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-600nw-2079504220.jpg`;
export function FolderCard({ cardInfo }: Props) {
  const { image_source, created_at, description, url } = cardInfo;

  const [kebabToggle, setKebabToggle] = useState(false);

  //createdAtDate
  const date = new Date(created_at).toLocaleString();
  const createdAtDate = date
    .split("")
    .slice(0, date.indexOf("오") - 2)
    .join("");

  const src = image_source ? image_source : defaultImage;
  const alt = image_source ? "카드이미지" : "기본이미지";

  const handleClickKebab = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setKebabToggle(kebabToggle ? false : true);
  };

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
            <div>
              <Image
                width={27}
                height={27}
                src={favoriteIcon}
                alt="favorite icon"
                className={styles.favorite}
              />
              <button onClick={handleClickKebab}>
                <Image
                  width={22}
                  height={17}
                  src={kebabIcon}
                  alt="kebab icon"
                  className={styles.kebab}
                />
              </button>
              {kebabToggle && <CardKebab url={url} />}
            </div>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.createdFrom}>{getFromTime(created_at)}</p>
            <p className={styles.description}>{description}</p>
            <p className={styles.createdAt}>{createdAtDate}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
