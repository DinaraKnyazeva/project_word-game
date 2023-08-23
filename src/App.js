import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style/app.css";
import Card from "./pages/card/Card";
import Title from "./pages/title/Title";
import Decks from "./pages/decks/Decks";
import Table from "./pages/table/Table";

export default function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <Link to="/">FRIENDS</Link>
          <nav>
            <ul>
              <li>
                <Link to="/words">Словарь</Link>
              </li>
              <li>
                <Link to="/training">Тренировка</Link>
              </li>
              <li>
                <Link to="/module">Модули</Link>
              </li>
              <li>
                <Link to="/">Главная</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Routes>
          <Route path="/words" element={<Table />} />
          <Route exact path="/" element={<Title />} />
          <Route path="/training" element={<Card />} />
          <Route path="/module" element={<Decks />} />
        </Routes>
      </div>
    </Router>
  );
}
