import "./title.scss";
import imgTitle from "../../assets/img/titleImg.png";

export default function Title() {
  return (
    <div className="title">
      <div className="title__text">
        <h1>
          Изучаем иностранные языки вместе с нашими четвероногими друзьями!
        </h1>
        <a href="#card-words__cards">Начать</a>
      </div>
      <div>
        <img className="title__img" src={imgTitle} alt="img" />
      </div>
    </div>
  );
}
