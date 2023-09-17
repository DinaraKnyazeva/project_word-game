import React, { useState } from "react";
import Card from "../card/Card";
import "./game.scss";
import imgDogCard from "../../assets/img/dogcard.png";
import wordJson from "../../data/words.json";

export default function Game() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [learnedWords, setLearnedWords] = useState(0); //для передачи с дочернего компонента кол-ва изученных слов

  const nextSlide = () => {
    if (activeSlide < wordJson.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  //функция для добавляения кол-ва изученных слов (+1)
  const handleWordLearned = () => {
    setLearnedWords((prevCount) => prevCount + 1);
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
          <Card activeSlide={activeSlide} onWordLearned={handleWordLearned} />
          <button onClick={nextSlide} className="slider-button next">
            &rarr;
          </button>
        </div>
      </div>

      <div className="game__done">Изучено слов: {learnedWords}</div>
    </div>
  );
}
