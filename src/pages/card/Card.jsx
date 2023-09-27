import React, { useState, useEffect, useRef, useContext } from "react";
import Pencil from "../../components/pencil/Pencil";
import { WordsContext } from "../../context/WordsProvider";
import "./card.scss";

export default function Card({ activeSlide, onWordLearned }) {
  const { words } = useContext(WordsContext);

  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = words[wordIndex] || {};
  const [showRussianWord, setShowRussianWord] = useState(false);
  const [showAnswerButton, setShowAnswerButton] = useState(true);
  const answerButtonRef = useRef(null);

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

  useEffect(() => {
    if (showAnswerButton && answerButtonRef.current) {
      answerButtonRef.current.focus();
    }
  }, [showAnswerButton]);

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
