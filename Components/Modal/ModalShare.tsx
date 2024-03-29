import kakao from "@/public/images/shareKakao.svg";
import facebook from "@/public/images/shareFacebook.svg";
import link from "@/public/images/shareLink.svg";
import ModalContainer from "./ModalContainer";
import { handleClipBoard } from "../../utils/handleClipBoard";
import { shareToFacebook } from "../../utils/shareToFacebook";
import { useKakaoShare } from "../../useHooks/useKakaoShare";
import Image from "next/image";
import styles from "@/styles/Modal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentMenu: string;
  currentFolderId: number;
}

const ModalShare = ({
  isOpen,
  onClose,
  currentMenu,
  currentFolderId,
}: Props) => {
  const { shareKakao } = useKakaoShare(currentFolderId);

  const urlBaseLink = "http://localhost:3000/shared/";
  const handleCopyLink = () => {
    handleClipBoard(`${urlBaseLink}${currentFolderId}`);
  };

  const shareContent = (
    <>
      <h2 className={styles.title}>폴더 공유</h2>
      <p>{currentMenu}</p>
      <div className={styles.socialButtonContainer}>
        <div className={styles.snsButton} onClick={() => shareKakao()}>
          <Image width={26} height={24} src={kakao} alt="kakao" />
          카카오톡
        </div>
        <div
          className={styles.snsButton}
          onClick={() => {
            shareToFacebook(`${urlBaseLink}${currentFolderId}`);
          }}
        >
          <Image width={20} height={20} src={facebook} alt="facebook" />
          페이스북
        </div>
        <div className="snsButton" onClick={handleCopyLink}>
          <Image width={42} height={42} src={link} alt="link" />
          링크 복사
        </div>
      </div>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      {shareContent}
    </ModalContainer>
  );
};
export default ModalShare;
