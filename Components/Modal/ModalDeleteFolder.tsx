import ModalContainer from "./ModalContainer";
import styles from "@/styles/Modal.module.css";

interface ModalDeleteFolderProps {
  isOpen: boolean;
  onClose: () => void;
  currentMenu: string;
}

const ModalDeleteFolder = ({
  isOpen,
  onClose,
  currentMenu,
}: ModalDeleteFolderProps) => {
  const deleteFolderContent = (
    <>
      <h2 className={styles.title}>폴더 삭제</h2>
      <p>{currentMenu}</p>
      <button className={styles.redButton}>삭제하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {deleteFolderContent}
    </ModalContainer>
  );
};
export default ModalDeleteFolder;
