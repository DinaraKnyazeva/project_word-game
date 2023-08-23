import pencil from "../../assets/img/sprite.svg";
import basket from "../../assets/img/sprite.svg";
import "./pencil.scss";

export default function Pencil() {
  return (
    <div className="list__cont-icon">
      <a href="#" title="Редактировать">
        <svg id="pencil">
          <use href={pencil + "#pencil"} />
        </svg>
      </a>
      <a href="#" title="Удалить">
        <svg id="basket">
          <use href={basket + "#basket"} />
        </svg>
      </a>
    </div>
  );
}
