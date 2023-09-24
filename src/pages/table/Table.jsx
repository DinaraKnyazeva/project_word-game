import React, { useState, useEffect } from "react";
import "./table.scss";
import Input from "../../components/input/input";
import Btn from "../../components/btn/Btn";
import List from "../../components/list/List";
import wordJson from "../../data/words.json";

export default function Table() {
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [transcription, setTranscription] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const validateEnglishWord = (word) => /^[a-zA-Z\s]+$/.test(word);
  const validateRussianWord = (word) => /^[а-яА-ЯёЁ\s]+$/.test(word);
  const validateTranscription = (transcription) =>
    /^[a-zA-Z0-9\s\-'’,.:;?()]+$/.test(transcription);

  useEffect(() => {
    setFormValid(word !== "" && translation !== "" && transcription !== "");
  }, [word, translation, transcription]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEnglishWord(word)) {
      alert("Пожалуйста, введите корректное слово на английском.");
      return;
    }

    if (!validateRussianWord(translation)) {
      alert("Пожалуйста, введите корректный перевод на русском.");
      return;
    }

    if (!validateTranscription(transcription)) {
      alert("Пожалуйста, введите корректную транскрипцию.");
      return;
    }

    console.log({
      word: word,
      translation: translation,
      transcription: transcription,
    });

    setWord("");
    setTranslation("");
    setTranscription("");
  };

  return (
    <div className="table">
      <div className="table__container">
        <div className="table__title">Словарь</div>
        <div className="table__cont-new-word">
          <form className="table__form" onSubmit={handleSubmit}>
            <Input
              placeholder={"Слово"}
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className={word.trim() ? "" : "input-error"}
            />
            <Input
              placeholder={"Перевод"}
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
              className={translation.trim() ? "" : "input-error"}
            />
            <Input
              placeholder={"Транскрипция"}
              value={transcription}
              onChange={(e) => setTranscription(e.target.value)}
              className={transcription.trim() ? "" : "input-error"}
            />
            <div className="table__form-new-btn">
              <Btn
                name={"Сохранить"}
                className={"card-words__button tableBtn"}
                disabled={!isFormValid}
                type="submit"
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
