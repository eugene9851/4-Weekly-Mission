import kakao from "../../images/shareKakao.svg";
import facebook from "../../images/shareFacebook.svg";
import link from "../../images/shareLink.svg";
import ModalContainer from "./ModalContainer";
// import useClipboard from "../../hooks/useClipboard";
// import useKakaoShare from "../../hooks/useKakaoShare";
// import useFacebookShare from "../../hooks/useFacebookShare";

const ModalShare = ({ isOpen, onClose, currentMenu }) => {
  // const { copied, copyToClipboard } = useClipboard();
  // const { handleKakaoShare } = useKakaoShare(
  //   selectedFolderName,
  //   selectedFolderId
  // );
  // const { handleFacebookShare } = useFacebookShare(selectedFolderId);

  // const folderShareLink = `${window.location.origin}/shared/${selectedFolderId}`;
  // const handleCopyToClipboard = () => {
  //   copyToClipboard(folderShareLink);
  // };

  const shareContent = (
    <>
      <h2 className="title">폴더 공유</h2>
      <p>{currentMenu}</p>
      <div className="socialButtonContainer">
        <div className="snsButton">
          <img src={kakao} alt="kakao" />
          카카오톡
        </div>
        <div className="snsButton">
          <img src={facebook} alt="facebook" />
          페이스북
        </div>
        <div className="snsButton">
          <img src={link} alt="link" />
          {/* {copied ? "복사 완료" : "링크 복사"} */}
          링크 복사
        </div>
      </div>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={shareContent} />
  );
};
export default ModalShare;
