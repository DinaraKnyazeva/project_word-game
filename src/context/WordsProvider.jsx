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

  const addWord = (newWord) => {
    setWords((prevWords) => [...prevWords, newWord]);

    fetch("http://itgirlschool.justmakeit.ru/api/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWord),
    }).catch((err) => {
      setError(err.message || "Ошибка при добавлении слова.");
    });
  };

  const updateWord = (wordId, updatedWord) => {
    setWords((prevWords) =>
      prevWords.map((word) => (word.id === wordId ? updatedWord : word))
    );

    fetch(`https://itgirlschool.justmakeit.ru/api/words/${wordId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWord),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при обновлении слова на сервере.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Слово успешно обновлено на сервере:", data);
      })
      .catch((error) => {
        console.error("Ошибка при обновлении слова:", error);
      });
  };

  const deleteWord = (wordId) => {
    fetch(`https://itgirlschool.justmakeit.ru/api/words/${wordId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при удалении слова на сервере.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Слово успешно удалено на сервере:", data);
        setWords((prevWords) => prevWords.filter((word) => word.id !== wordId));
      })
      .catch((error) => {
        console.error("Ошибка при удалении слова:", error);
      });
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
