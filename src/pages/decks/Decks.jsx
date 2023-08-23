import "./decks.scss";
import imgDecks from "../../assets/img/dogModule.png";

export default function Decks() {
  return (
    <div className="decks">
      <div className="decks__module-cont">
        <div className="decks__title">Модули</div>
        <div className="decks__list">
          <li>
            <a href="#">
              <span id="en"></span> Английский
            </a>
          </li>
          <li>
            <a href="#">
              <span id="es"></span> Испанский
            </a>
          </li>
          <li>
            <a href="#">
              <span id="de"></span> Немецкий
            </a>
          </li>
        </div>
      </div>
      <div className="decks__img-cont">
        <img src={imgDecks} alt="img-dog" />
      </div>
    </div>
  );
}
