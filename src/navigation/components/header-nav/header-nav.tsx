import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';
import { ADD_TRANSACTION } from '@/navigation/constants-dupa';
import { useUrlStore } from '@/store/url';

export const HeaderNav = () => {
  const isDarkTheme = useTheme();
  const incomeUrl = useUrlStore((state) => state.incomeLink);
  const expenseUrl = useUrlStore((state) => state.expenseLink);

  return (
    <nav className="navigation ">
      <ul>
        <NavLink to={incomeUrl}>
          <li className={clsx('navigation__item', isDarkTheme && 'navigation__item--dark')}>Przychody</li>
        </NavLink>
        <NavLink to={expenseUrl}>
          <li className={clsx('navigation__item', isDarkTheme && 'navigation__item--dark')}>Wydatki</li>
        </NavLink>
        <NavLink to={ADD_TRANSACTION}>
          <li className={clsx('navigation__item', isDarkTheme && 'navigation__item--dark')}>Dodaj transakcje</li>
        </NavLink>
      </ul>
    </nav>
  );
};
