import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import { CloseMenuButton } from '@/components/ui/buttons/close-menu-button';
import { OpenMenuButton } from '@/components/ui/buttons/open-menu-button';
import { ThemeButton } from '@/components/ui/buttons/theme-button';
import { UndoButton } from '@/components/ui/buttons/undo-button';
import { useTheme } from '@/hooks/use-theme';
import { HeaderNav } from '@/navigation/components/header-nav/header-nav';
import { EXPENSE, INCOME, ROOT } from '@/navigation/constants-dupa';
import { useThemeStore } from '@/store/theme';
import { useUrlStore } from '@/store/url';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const isDarkTheme = useTheme();
  const homeUrl = useUrlStore((state) => state.homeLink);
  const toogleTheme = useThemeStore((state) => state.toogleTheme);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  const handleThemeClick = () => {
    toogleTheme();
  };

  const getUndoPage = () => {
    if (location.pathname === EXPENSE || location.pathname === INCOME) {
      return navigate(homeUrl);
    }
    if (title === 'Nie znaleziono strony') {
      return navigate(homeUrl);
    }

    return navigate(-1);
  };

  return (
    <>
      <header className={clsx('header', isDarkTheme && 'header--dark')}>
        {location.pathname === ROOT ? (
          <>
            {isClicked ? (
              <CloseMenuButton isDarkTheme={isDarkTheme} onClick={handleMenuClick} />
            ) : (
              <OpenMenuButton isDarkTheme={isDarkTheme} onClick={handleMenuClick} />
            )}
          </>
        ) : (
          <UndoButton isDarkTheme={isDarkTheme} onClick={() => getUndoPage()} />
        )}
        <h1>{title}</h1>
        <ThemeButton isDarkTheme={isDarkTheme} onClick={handleThemeClick} />
      </header>
      {isClicked && <HeaderNav />}
    </>
  );
};
