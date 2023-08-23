import "./list.scss";
import Pencil from "../pencil/Pencil";

export default function List(props) {
  return (
    <div className="list">
      <div className="list__container">
        <div className="list__english">
          <p>{props.english}</p>
        </div>
        <div className="list__transcription">
          <p>{props.russian}</p>
        </div>
        <div className="list__russian">
          <p>{props.transcription}</p>
        </div>
        <Pencil />
      </div>

      <p className="list__line"></p>
    </div>
  );
}
