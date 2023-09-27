import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WordsProvider } from "./context/WordsProvider";

import Header from "./components/header/Header";
import Game from "./pages/game/Game";
import Title from "./pages/title/Title";
import Decks from "./pages/decks/Decks";
import Table from "./pages/table/Table";
import Error from "./pages/errorrr/Error";

import "./style/app.scss";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            <WordsProvider>
              <Routes>
                <Route path="/words" element={<Table />} />
                <Route path="/training" element={<Game />} />
                <Route path="/module" element={<Decks />} />
                <Route exact path="/" element={<Title />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </WordsProvider>
          </main>
        </div>
      </Router>
    </>
  );
}
