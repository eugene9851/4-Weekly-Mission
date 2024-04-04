import shareIcon from "@/public/images/sharewindow.svg";
import changeIcon from "@/public/images/change.svg";
import deleteIcon from "@/public/images/delete.svg";
import styles from "../styles/handleFolder.module.css";
import ModalEdit from "./Modal/ModalEdit";
import { useShowModal } from "../useHooks/useShowModal";
import ModalShare from "./Modal/ModalShare";
import ModalDeleteFolder from "./Modal/ModalDeleteFolder";
import { useFolder } from "../useHooks/useFolder";
import Image from "next/image";

interface HandleFolderProps {
  id: number;
}
export function HandleFolder({ id }: HandleFolderProps) {
  const { handleShowModal, showModal, setShowModal, clickValue } =
    useShowModal();
  const { currentMenu } = useFolder();

  return (
    <>
      <div className={styles.handle}>
        <button className={styles.icon} onClick={handleShowModal}>
          <Image width={18} height={19} src={shareIcon} alt="공유 아이콘" />
          공유
        </button>
        <button className={styles.icon} onClick={handleShowModal}>
          <Image
            width={18}
            height={19}
            src={changeIcon}
            alt="이름변경 아이콘"
          />
          이름 변경
        </button>
        <button className={styles.icon} onClick={handleShowModal}>
          <Image width={18} height={19} src={deleteIcon} alt="삭제 아이콘" />
          삭제
        </button>
      </div>
      {showModal && clickValue === "공유" ? (
        <ModalShare
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          currentMenu={currentMenu}
          currentFolderId={id}
        />
      ) : showModal && clickValue === "이름 변경" ? (
        <ModalEdit
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          selectedFolderName={"유용한 팁"}
        />
      ) : (
        <ModalDeleteFolder
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          currentMenu={currentMenu}
        />
      )}
    </>
  );
}
