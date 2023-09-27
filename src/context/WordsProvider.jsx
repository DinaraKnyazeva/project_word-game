import React, { createContext, useState, useEffect } from "react";

export const WordsContext = createContext();

export function WordsProvider({ children }) {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить слова.");
        }
        return response.json();
      })
      .then((data) => {
        setWords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Произошла ошибка при загрузке данных.");
        setLoading(false);
      });
  }, []);

  //метод для добавления слов:
  const addWord = (newWord) => {
    setWords((prevWords) => [...prevWords, newWord]);
  };

  //метод для изменения слова:
  const updateWord = (wordId, updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) => (word.id === wordId ? updatedWord : word))
    );
  };
  //метод для удаления слова:
  const deleteWord = (wordId) => {
    setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
  };

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        loading,
        error,
        addWord,
        updateWord,
        deleteWord,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
}
