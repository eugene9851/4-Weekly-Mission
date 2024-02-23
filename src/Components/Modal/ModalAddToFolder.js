import ModalContainer from "./ModalContainer";
import { useFolder } from "../../useHooks/useFolder";
// import { useLinks } from "../../useHooks/useLinks";

const ModalAddToFolder = ({ isOpen, onClose, url }) => {
  const { folder } = useFolder();
  // const { handleLinks, links } = useLinks();

  const addFolderContent = (
    <>
      <h2 className="title">폴더에 추가</h2>
      <div className="menuLists">
        {folder &&
          folder.map((eachFolder) => (
            <div className="menuList">
              {eachFolder.name}
              {/* <p>{handleLinks(eachFolder.id).length}개 링크</p> */}
              {/* handleLinks(eachFolder.id) //[] */}
            </div>
          ))}
      </div>
      <button className="blueButton">추가하기</button>
    </>
  );

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      children={addFolderContent}
    />
  );
};
export default ModalAddToFolder;
