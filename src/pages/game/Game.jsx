import React, { useState, useContext } from "react";
import { WordsContext } from "../../context/WordsProvider";
import Card from "../card/Card";
import imgDogCard from "../../assets/img/dogcard.png";
import "./game.scss";
import WordCorrection from "../../components/wordCorrection/WordCorrection";

export default function Game() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0);
  const [showWordCorrection, setShowWordCorrection] = useState(false);

  const { words } = useContext(WordsContext);

  const nextSlide = () => {
    if (activeSlide < words.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleWordLearned = () => {
    setLearnedWords((prevCount) => prevCount + 1);
  };

  const handleEditClick = () => {
    setShowWordCorrection(true);
  };

  const handleClose = () => {
    setShowWordCorrection(false);
  };

  return (
    <div className="game">
      <div className="game__title">Тренировка</div>

      <div className="game__container">
        <div className="game__container-img">
          <img src={imgDogCard} alt="img dog" />
        </div>
        <div className="game__slide">
          <button onClick={prevSlide} className="slider-button prev">
            &larr;
          </button>
          <Card
            activeSlide={activeSlide}
            onWordLearned={handleWordLearned}
            onEditClick={handleEditClick}
          />
          <button onClick={nextSlide} className="slider-button next">
            &rarr;
          </button>
        </div>
      </div>

      <div className="game__done">Изучено слов: {learnedWords}</div>

      {showWordCorrection && (
        <WordCorrection word={words[activeSlide]} onClose={handleClose} />
      )}
    </div>
  );
}
