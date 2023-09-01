import React, { useState, useEffect } from "react";
import Pencil from "../../components/pencil/Pencil";
import wordJson from "../../data/words.json";
import "./card.scss";

export default function Card({ activeSlide }) {
  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = wordJson[wordIndex];
  const [showRussianWord, setShowRussianWord] = useState(false);
  const [showAnswerButton, setShowAnswerButton] = useState(true);

  useEffect(() => {
    setWordIndex(activeSlide);
    setShowRussianWord(false);
    setShowAnswerButton(true);
  }, [activeSlide]);

  const handleShowAnswer = () => {
    setShowRussianWord(true);
    setShowAnswerButton(false);
  };

  return (
    <div className="card-words">
      <div className="card-words__cards-icons">
        <Pencil />
      </div>
      <p className="card-words__word-en">{english}</p>
      {showRussianWord && <p className="card-words__word-ru">{russian}</p>}
      {showAnswerButton && (
        <div className="card-words__inner-answert">
          <button className="card-words__button" onClick={handleShowAnswer}>
            Показать ответ
          </button>
        </div>
      )}
    </div>
  );
}
