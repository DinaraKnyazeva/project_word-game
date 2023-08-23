import "./header.scss";

export default function Header() {
  return (
    <div className="header">
      <p className="header__logo">FRIENDS</p>
      <nav>
        <ul>
          <li>
            <a href="#table">Словарь</a>
          </li>
          <li>
            <a href="#card-words__cards">Тренировка</a>
          </li>
          <li>
            <a href="#decks">Модули</a>
          </li>
          <li>
            <a href="#title">Главная</a>
          </li>
        </ul>
      </nav>
      <div className="header__registration">
        <a href="#">Вход</a>
      </div>
    </div>
  );
}
