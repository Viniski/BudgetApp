import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../../redux/themeSlice";
import { Nav } from "../Nav/Nav";
import { UndoButton } from "../Buttons/UndoButton";
import { OpenMenuButton } from "../Buttons/OpenMenuButton";
import { CloseMenuButton } from "../Buttons/CloseMenuButton";
import { ThemeButton } from "../Buttons/ThemeButton";

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
            <OpenMenuButton
              className={
                isClicked
                  ? `header__button-menu--disactive`
                  : `header__button-menu ${
                      isDarkTheme && `header__button-menu--dark`
                    }`
              }
              onClick={handleMenuClick}
            />
            <CloseMenuButton
              className={
                isClicked
                  ? `header__button-menu ${
                      isDarkTheme && `header__button-menu--dark`
                    }`
                  : `header__button-menu--disactive`
              }
              onClick={handleMenuClick}
            />
          </>
        ) : (
          <UndoButton
            onClick={() => navigate(getUndoPage())}
            className={`header__button-back ${
              isDarkTheme && `header__button-back--dark`
            }`}
          />
        )}
        <h1>{title}</h1>
        <ThemeButton
          onClick={handleThemeClick}
          className={`header__button-theme ${
            isDarkTheme && `header__button-theme--dark`
          }`}
        />
      </header>
      {isClicked && <Nav />}
    </>
  );
}
