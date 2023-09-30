import pencil from "../../assets/img/sprite.svg";
import basket from "../../assets/img/sprite.svg";
import "./pencil.scss";

export default function Pencil({ onEditClick, onDeleteClick, wordId }) {
  return (
    <div className="list__cont-icon">
      <a href="#" title="Редактировать" onClick={onEditClick}>
        <svg id="pencil">
          <use href={pencil + "#pencil"} />
        </svg>
      </a>
      <a href="#" title="Удалить" onClick={() => onDeleteClick(wordId)}>
        <svg id="basket">
          <use href={basket + "#basket"} />
        </svg>
      </a>
    </div>
  );
}
