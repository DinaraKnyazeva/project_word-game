import React, { useState, useEffect } from "react";
import Pencil from "../../components/pencil/Pencil";
import wordJson from "../../data/words.json";
import "./card.scss";

export default function Card({ activeSlide }) {
  const [wordIndex, setWordIndex] = useState(0);
  const { english, russian } = wordJson[wordIndex];
  const [showRussianWord, setShowRussianWord] = useState(false);

  useEffect(() => {
    // Обновляем индекс слова только при изменении activeSlide
    setWordIndex(activeSlide);
    setShowRussianWord(false); // Сбрасываем перевод при смене карточки
  }, [activeSlide]);

  const handleShowAnswer = () => {
    setShowRussianWord(true);
  };

  return (
    <div className="card-words">
      <div className="card-words__cards-icons">
        <Pencil />
      </div>
      <p className="card-words__word-en">{english}</p>
      {showRussianWord && <p className="card-words__word-ru">{russian}</p>}
      {!showRussianWord && (
        <div className="card-words__inner-answert">
          <button className="card-words__button" onClick={handleShowAnswer}>
            Показать ответ
          </button>
        </div>
      )}
    </div>
  );
}

// const [wordIndex, setWordIndex] = useState(0);
//   const [sliderKey, setSliderKey] = useState(0); // Добавляем состояние для key
//   const { english, russian } = wordJson[wordIndex];
//   const [showRussianWord, setShowRussianWord] = useState(false);

//   useEffect(() => {
//     const randomWordIndex = Math.floor(Math.random() * wordJson.length);
//     setWordIndex(randomWordIndex);
//     setSliderKey(sliderKey + 1); // Изменяем key при обновлении слова
//   }, []);

//   const handleShowAnswer = () => {
//     setShowRussianWord(true);
//   };
