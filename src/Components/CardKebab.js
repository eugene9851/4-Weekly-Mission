import "../styles/CardKebab.css";

export function CardKebab() {
  return (
    <div className="kebabBox">
      <button className="kebabDelete kebabBtn">삭제하기</button>
      <button className="kebabAddMyFolder kebabBtn">폴더에 추가</button>
    </div>
  );
}
