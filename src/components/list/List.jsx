import Pencil from "../pencil/Pencil";
import "./list.scss";

export default function List({
  english,
  russian,
  transcription,
  onEditClick,
  deleteWord,
  word,
}) {
  return (
    <div className="list">
      <div className="list__container">
        <div className="list__english">
          <p>{english}</p>
        </div>
        <div className="list__transcription">
          <p>{russian}</p>
        </div>
        <div className="list__russian">
          <p>{transcription}</p>
        </div>
        <Pencil
          onEditClick={onEditClick}
          onDeleteClick={deleteWord}
          wordId={word.id}
        />
      </div>
      <p className="list__line"></p>
    </div>
  );
}
