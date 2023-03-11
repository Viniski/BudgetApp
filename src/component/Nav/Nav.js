import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export function Nav() {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";
  const incomeUrl = useSelector((state) => state.url.incomeLink);
  const excomeUrl = useSelector((state) => state.url.expenseLink);

  return (
    <nav className="navigation ">
      <ul>
        <NavLink to={incomeUrl}>
          <li
            className={`navigation__item ${
              isDarkTheme && `navigation__item--dark`
            }`}
          >
            Dochody
          </li>
        </NavLink>
        <NavLink to={excomeUrl}>
          <li
            className={`navigation__item ${
              isDarkTheme && `navigation__item--dark`
            }`}
          >
            Wydatki
          </li>
        </NavLink>
        <NavLink to="/dodaj-transakcje">
          <li
            className={`navigation__item ${
              isDarkTheme && `navigation__item--dark`
            }`}
          >
            Dodaj transakcje
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
