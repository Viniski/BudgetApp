import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import { useUrlStore } from "../../../store/url";
import { useTheme } from "../../../hooks/useTheme";
import { ADD_TRANSACTION, CHARTS } from "../../CONSTANTS";

export function HeaderNav() {
  const isDarkTheme = useTheme();
  const incomeUrl = useUrlStore((state) => state.incomeLink);
  const expenseUrl = useUrlStore((state) => state.expenseLink);

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
        <NavLink to={expenseUrl}>
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
