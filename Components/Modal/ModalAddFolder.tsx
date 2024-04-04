import ModalContainer from "./ModalContainer";
import styles from "@/styles/Modal.module.css";

const ModalAddFolder = ({
  isOpen,
  onClose,
  selectedFolderName,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName?: string;
}) => {
  const addContent = (
    <>
      <h2 className={styles.title}>폴더 추가</h2>
      <input placeholder={selectedFolderName} className={styles.modalInput} />
      <button className={styles.blueButton}>추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {addContent}
    </ModalContainer>
  );
};
export default ModalAddFolder;
