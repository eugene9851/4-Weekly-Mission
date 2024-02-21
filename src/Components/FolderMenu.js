import "../styles/folderMenu.css";
import { Button } from "./Button";

export function FolderMenu({ folderNames, onMenuChange }) {
  const sendMenu = (e, id) => {
    const newMenu = e.target.textContent;
    onMenuChange(newMenu, id);
  };

  return (
    <>
      <div className="folderMenu">
        <div>
          <Button folderName={"전체"} onClick={sendMenu}></Button>
          {folderNames &&
            folderNames.length &&
            folderNames.map(({ name, id }) => (
              <Button
                folderName={name}
                key={id}
                onClick={(e) => sendMenu(e, id)}
              ></Button>
              //사용자에게 보여지는 글자와 id로 쓰이는 글자가 다른게 좋음
            ))}
        </div>

        <div className="add">폴더 추가 +</div>
      </div>
    </>
  );
}
