// import "./AddLinkBar.css";
import linkIcon from "@/public/images/link.svg";
import ModalAddToFolder from "./Modal/ModalAddToFolder";
import { useShowModal } from "../useHooks/useShowModal";
import Image from "next/image";

const AddLinkBar = () => {
  const { handleShowModal, showModal, setShowModal } = useShowModal();

  return (
    <header className="headerArea">
      <nav>
        <form>
          <div className="linkInputArea">
            <input
              placeholder="링크를 추가해 보세요"
              className="addLinks"
            ></input>
            <Image
              width={20}
              height={21}
              src={linkIcon}
              alt="link icon"
              className="linkIcon"
            />
            <button className="addBtn" onClick={handleShowModal}>
              추가하기
            </button>
            {showModal && (
              <ModalAddToFolder
                isOpen={showModal}
                onClose={() => setShowModal(false)}
              />
            )}
          </div>
        </form>
      </nav>
    </header>
  );
};

export default AddLinkBar;
