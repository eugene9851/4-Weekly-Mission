import ModalContainer from "./ModalContainer";
import styles from "@/styles/Modal.module.css";

interface ModalDeleteLinkProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

const ModalDeleteLink = ({ isOpen, onClose, url }: ModalDeleteLinkProps) => {
  const deleteLinkContent = (
    <>
      <h2 className={styles.title}>링크 삭제</h2>
      <p>{url}</p>
      <button className={styles.redButton}>삭제하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {deleteLinkContent}
    </ModalContainer>
  );
};

export default ModalDeleteLink;
