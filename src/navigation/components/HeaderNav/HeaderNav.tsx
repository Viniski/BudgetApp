import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADD_TRANSACTION } from "../../CONSTANTS";

export function HeaderNav() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
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
            Przychody
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
        <NavLink to={ADD_TRANSACTION}>
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
