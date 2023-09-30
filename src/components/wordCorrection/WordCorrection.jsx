import React, { useState, useContext } from "react";
import { WordsContext } from "../../context/WordsProvider";
import Input from "../../components/input/input";
import Btn from "../btn/Btn";
import "./wordCorrection.scss";

export default function WordCorrection({ word, onClose }) {
  const { updateWord } = useContext(WordsContext);

  const [wordValue, setWordValue] = useState(word.english);
  const [translationValue, setTranslationValue] = useState(word.russian);
  const [transcriptionValue, setTranscriptionValue] = useState(
    word.transcription
  );

  const handleSave = () => {
    const updatedWord = {
      ...word,
      english: wordValue,
      russian: translationValue,
      transcription: transcriptionValue,
    };

    updateWord(word.id, updatedWord);
    onClose();
  };

  return (
    <div className="word-correction">
      <div className="word-correction__card">
        <div className="word-correction__esc">
          <Btn
            name={"×"}
            type="button"
            className={"card-words__button btn-esc"}
            onClick={onClose}
          ></Btn>
        </div>
        <div>Слово:</div>
        <Input
          placeholder={"Слово"}
          value={wordValue}
          onChange={(e) => setWordValue(e.target.value)}
          className={wordValue.trim() ? "" : "input-error"}
        />
        <div>Перевод:</div>
        <Input
          placeholder={"Перевод"}
          value={translationValue}
          onChange={(e) => setTranslationValue(e.target.value)}
          className={translationValue.trim() ? "" : "input-error"}
        />
        <div>Транскрипция:</div>
        <Input
          placeholder={"Транскрипция"}
          value={transcriptionValue}
          onChange={(e) => setTranscriptionValue(e.target.value)}
          className={transcriptionValue.trim() ? "" : "input-error"}
        />
        <Btn
          name={"Сохранить"}
          type="button"
          className={"card-words__button btn"}
          onClick={handleSave}
        ></Btn>
      </div>
    </div>
  );
}
