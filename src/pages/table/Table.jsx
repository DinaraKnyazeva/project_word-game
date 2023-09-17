import "./table.scss";
import Input from "../../components/input/input";
import Btn from "../../components/btn/Btn";
import List from "../../components/list/List";
import wordJson from "../../data/words.json";

export default function Table() {
  return (
    <div className="table">
      <div className="table__container">
        <div className="table__title">Словарь</div>
        <div className="table__cont-new-word">
          <form className="table__form">
            <Input placeholder={"Слово"} />
            <Input placeholder={"Перевод"} />
            <Input placeholder={"Транскрипция"} />
            <div className="table__form-new-btn">
              <Btn
                name={"Добавить"}
                className={"card-words__button tableBtn"}
              />
            </div>
          </form>
        </div>
        {wordJson.map((word, id) => (
          <List
            key={word.id}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
          />
        ))}
      </div>
    </div>
  );
}
