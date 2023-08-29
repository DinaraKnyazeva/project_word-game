import { NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <NavLink to="/">FRIENDS</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/words">Словарь</NavLink>
          </li>
          <li>
            <NavLink to="/training">Тренировка</NavLink>
          </li>
          <li>
            <NavLink to="/module">Модули</NavLink>
          </li>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
