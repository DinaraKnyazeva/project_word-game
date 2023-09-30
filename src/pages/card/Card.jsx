import React, { useState, useEffect, useRef, useContext } from "react";
import Pencil from "../../components/pencil/Pencil";
import { WordsContext } from "../../context/WordsProvider";
import "./card.scss";

export default function Card({ activeSlide, onWordLearned, onEditClick }) {
  const { words } = useContext(WordsContext);
  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = words[wordIndex] || {};
  const [showRussianWord, setShowRussianWord] = useState(false);
  const [showAnswerButton, setShowAnswerButton] = useState(true);

  const answerButtonRef = useRef(null);

  const handleShowAnswer = () => {
    setShowRussianWord(true);
    setShowAnswerButton(false);
    onWordLearned();
  };

  useEffect(() => {
    setWordIndex(activeSlide);
    setShowRussianWord(false);
    setShowAnswerButton(true);
  }, [activeSlide]);

  return (
    <div className="card-words">
      <div className="card-words__cards-icons">
        <Pencil onEditClick={onEditClick} />
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
