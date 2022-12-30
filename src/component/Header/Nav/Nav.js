import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";

  return (
    <nav className="navigation ">
      <ul>
        <NavLink to="/dochody">
          <li
            className={`navigation__item ${
              themeDark && `navigation__item--dark`
            }`}
          >
            Dochody
          </li>
        </NavLink>
        <NavLink to="/wydatki">
          <li
            className={`navigation__item ${
              themeDark && `navigation__item--dark`
            }`}
          >
            Wydatki
          </li>
        </NavLink>
        <NavLink to="/dodaj-transakcje">
          <li
            className={`navigation__item ${
              themeDark && `navigation__item--dark`
            }`}
          >
            Dodaj transakcje
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
