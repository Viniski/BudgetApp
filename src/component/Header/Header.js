import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../../redux/themeSlice";
import { HeaderNav } from "../../navigation/components/HeaderNav/HeaderNav";
import { UndoButton } from "../../UI/Buttons/UndoButton";
import { OpenMenuButton } from "../../UI/Buttons/OpenMenuButton";
import { CloseMenuButton } from "../../UI/Buttons/CloseMenuButton";
import { ThemeButton } from "../../UI/Buttons/ThemeButton";

export function Header({ title }) {
  const [isClicked, setIsClicked] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const homeUrl = useSelector((state) => state.url.homeLink);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  const handleThemeClick = () => {
    dispatch(toogle());
  };

  const getUndoPage = () => {
    if (location.pathname === "/dochody" || location.pathname === "/wydatki") {
      return homeUrl;
    } else if (title === "Nie znaleziono strony") {
      return homeUrl;
    } else return -1;
  };

  return (
    <>
      <header className={`header ${isDarkTheme && `header--dark`}`}>
        {location.pathname === "/" ? (
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
          <UndoButton
            onClick={() => navigate(getUndoPage())}
            isDarkTheme={isDarkTheme}
          />
        )}
        <h1>{title}</h1>
        <ThemeButton onClick={handleThemeClick} isDarkTheme={isDarkTheme} />
      </header>
      {isClicked && <HeaderNav />}
    </>
  );
}
