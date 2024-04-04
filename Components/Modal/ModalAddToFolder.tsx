import ModalContainer from "./ModalContainer";
import { useFolder } from "../../useHooks/useFolder";
import styles from "@/styles/Modal.module.css";
interface ModalAddToFolderProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFolderName?: string;
}
const ModalAddToFolder = ({
  isOpen,
  onClose,
  selectedFolderName,
}: ModalAddToFolderProps) => {
  const { folder } = useFolder();

  const addFolderContent = (
    <>
      <h2 className={styles.title}>폴더에 추가</h2>
      <div className={styles.menuLists}>
        {folder &&
          folder.map((eachFolder, idx) => (
            <div className={styles.menuList} key={idx}>
              {eachFolder.name}
              <p>{eachFolder.link.count}개 링크</p>
            </div>
          ))}
      </div>
      <button className={styles.blueButton}>추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {addFolderContent}
    </ModalContainer>
  );
};
export default ModalAddToFolder;
