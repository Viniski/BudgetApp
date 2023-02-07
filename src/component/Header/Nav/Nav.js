import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  const incomeUrl = useSelector((state) => state.url.incomeLink);
  const excomeUrl = useSelector((state) => state.url.expenseLink);
  console.log(incomeUrl, excomeUrl);

  return (
    <nav className="navigation ">
      <ul>
        <NavLink to={incomeUrl}>
          <li
            className={`navigation__item ${
              themeDark && `navigation__item--dark`
            }`}
          >
            Dochody
          </li>
        </NavLink>
        <NavLink to={excomeUrl}>
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
