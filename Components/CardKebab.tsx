import styles from "../styles/CardKebab.module.css";
import { useShowModal } from "../useHooks/useShowModal";
import ModalAddToFolder from "./Modal/ModalAddToFolder";
import ModalDeleteLink from "./Modal/ModalDeleteLink";

interface Props {
  url: string;
}
export function CardKebab({ url }: Props) {
  const { handleShowModal, showModal, setShowModal, clickValue } =
    useShowModal();

  return (
    <div className={styles.kebabBox}>
      <button
        className={(styles.kebabDelete, styles.kebabBtn)}
        onClick={handleShowModal}
      >
        삭제하기
      </button>
      <button
        className={(styles.kebabAddMyFolder, styles.kebabBtn)}
        onClick={handleShowModal}
      >
        폴더에 추가
      </button>
      {showModal && clickValue === "폴더에 추가" ? (
        <ModalAddToFolder
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          selectedFolderName={"내용 입력"}
        />
      ) : (
        <ModalDeleteLink
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          url={url}
        />
      )}
    </div>
  );
}
