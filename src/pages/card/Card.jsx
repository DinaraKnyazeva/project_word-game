import React, { useState, useEffect, useRef } from "react";
import Pencil from "../../components/pencil/Pencil";
import wordJson from "../../data/words.json";
import "./card.scss";

export default function Card({ activeSlide, onWordLearned }) {
  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = wordJson[wordIndex];
  const [showRussianWord, setShowRussianWord] = useState(false);
  const [showAnswerButton, setShowAnswerButton] = useState(true);
  const answerButtonRef = useRef(null); //фокус на кнопку показать перевод

  useEffect(() => {
    setWordIndex(activeSlide);
    setShowRussianWord(false);
    setShowAnswerButton(true);
  }, [activeSlide]);

  const handleShowAnswer = () => {
    setShowRussianWord(true);
    setShowAnswerButton(false);
    onWordLearned();
  };

  // фокуса на кнопке каждый раз, когда активное слово меняется
  useEffect(() => {
    if (answerButtonRef.current) {
      answerButtonRef.current.focus();
    }
  }, [activeSlide]);

  return (
    <div className="card-words">
      <div className="card-words__cards-icons">
        <Pencil />
      </div>
      <p className="card-words__word-en">{english}</p>
      {showRussianWord && <p className="card-words__word-ru">{russian}</p>}
      {showAnswerButton && (
        <div className="card-words__inner-answert">
          <button
            className="card-words__button"
            onClick={handleShowAnswer}
            ref={answerButtonRef}
          >
            Показать перевод
          </button>
        </div>
      )}
    </div>
  );
}
