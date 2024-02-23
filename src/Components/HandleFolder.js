import shareIcon from "../images/sharewindow.svg";
import changeIcon from "../images/change.svg";
import deleteIcon from "../images/delete.svg";
import "../styles/handleFolder.css";
import ModalEdit from "./Modal/ModalEdit";
import { useShowModal } from "../useHooks/useShowModal";

export function HandleFolder() {
  const { handleShowModal, showModal, setShowModal } = useShowModal();

  return (
    <>
      <div className="handle">
        <div className="icon">
          <img src={shareIcon} alt="공유 아이콘" />
          공유
        </div>
        <button className="icon" onClick={handleShowModal}>
          <img src={changeIcon} alt="이름변경 아이콘" />
          이름 변경
        </button>
        {showModal && (
          <ModalEdit
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            selectedFolderName={"유용한 팁"}
          />
        )}
        <div className="icon">
          <img src={deleteIcon} alt="삭제 아이콘" />
          삭제
        </div>
      </div>
    </>
  );
}
