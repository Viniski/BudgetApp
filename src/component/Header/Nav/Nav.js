import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navigation ">
      <ul>
        <NavLink to="/dochody">
          <li className="navigation__item navigation__item--dark">Dochody</li>
        </NavLink>
        <NavLink to="/wydatki">
          <li className="navigation__item navigation__item--dark">Wydatki</li>
        </NavLink>
        <NavLink to="/dodaj-transakcje">
          <li className="navigation__item navigation__item--dark">Dodaj transakcje</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
