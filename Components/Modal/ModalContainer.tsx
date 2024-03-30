import Modal from "react-modal";
import closeIcon from "@/public/images/close.svg";
import styles from "@/styles/Modal.module.css";
import Image from "next/image";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const ModalContainer = ({ isOpen, onClose, children }: ModalContainerProps) => {
  const defaultStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: 15,
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={defaultStyles}>
      <div className={styles.modalBox}>
        <Image
          width={24}
          height={24}
          src={closeIcon}
          alt="닫기버튼"
          className={styles.closeIcon}
          onClick={onClose}
        />
        {children}
      </div>
    </Modal>
  );
};

export default ModalContainer;
