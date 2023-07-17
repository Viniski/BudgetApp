import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { toogle } from "../../redux/themeSlice";
import { useTheme } from "../../hooks/useTheme";
import { HeaderNav } from "../../navigation/components/HeaderNav/HeaderNav";
import { UndoButton } from "../UI/Buttons/UndoButton";
import { OpenMenuButton } from "../UI/Buttons/OpenMenuButton";
import { CloseMenuButton } from "../UI/Buttons/CloseMenuButton";
import { ThemeButton } from "../UI/Buttons/ThemeButton";
import { ROOT, EXPENSE, INCOME } from "../../navigation/CONSTANTS";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const isDarkTheme = useTheme();
  const homeUrl = useAppSelector((state) => state.url.homeLink);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  const handleThemeClick = () => {
    dispatch(toogle());
  };

  const getUndoPage = () => {
    if (location.pathname === EXPENSE || location.pathname === INCOME) {
      return navigate(homeUrl);
    }
    if (title === "Nie znaleziono strony") {
      return navigate(homeUrl);
    }
    return navigate(-1);
  };

  return (
    <>
      <header className={clsx("header", isDarkTheme && "header--dark")}>
        {location.pathname === ROOT ? (
          <>
            {isClicked ? (
              <CloseMenuButton
                onClick={handleMenuClick}
                isDarkTheme={isDarkTheme}
              />
            ) : (
              <OpenMenuButton
                onClick={handleMenuClick}
                isDarkTheme={isDarkTheme}
              />
            )}
          </>
        ) : (
          <UndoButton onClick={() => getUndoPage()} isDarkTheme={isDarkTheme} />
        )}
        <h1>{title}</h1>
        <ThemeButton onClick={handleThemeClick} isDarkTheme={isDarkTheme} />
      </header>
      {isClicked && <HeaderNav />}
    </>
  );
}
