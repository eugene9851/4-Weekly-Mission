import ModalContainer from "./ModalContainer";
import styles from "@/styles/Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName: string;
}

const ModalEdit = ({ isOpen, onClose, selectedFolderName }: Props) => {
  const editContent = (
    <>
      <h2 className={styles.title}>폴더 이름 변경</h2>
      <input placeholder={selectedFolderName} className={styles.modalInput} />
      <button className={styles.blueButton}>변경하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {editContent}
    </ModalContainer>
  );
};
export default ModalEdit;
