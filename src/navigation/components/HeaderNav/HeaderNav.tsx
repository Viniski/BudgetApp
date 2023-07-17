import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { useAppSelector } from "../../../redux/hooks";
import { useTheme } from "../../../hooks/useTheme";
import { ADD_TRANSACTION, CHARTS } from "../../CONSTANTS";

export function HeaderNav() {
  const isDarkTheme = useTheme();
  const incomeUrl = useAppSelector((state) => state.url.incomeLink);
  const excomeUrl = useAppSelector((state) => state.url.expenseLink);

  return (
    <nav className="navigation ">
      <ul>
        <NavLink to={incomeUrl}>
          <li
            className={clsx(
              "navigation__item",
              isDarkTheme && "navigation__item--dark"
            )}
          >
            Przychody
          </li>
        </NavLink>
        <NavLink to={excomeUrl}>
          <li
            className={clsx(
              "navigation__item",
              isDarkTheme && "navigation__item--dark"
            )}
          >
            Wydatki
          </li>
        </NavLink>
        <NavLink to={CHARTS}>
          <li
            className={clsx(
              "navigation__item",
              isDarkTheme && "navigation__item--dark"
            )}
          >
            Wykresy
          </li>
        </NavLink>
        <NavLink to={ADD_TRANSACTION}>
          <li
            className={clsx(
              "navigation__item",
              isDarkTheme && "navigation__item--dark"
            )}
          >
            Dodaj transakcje
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
