import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../../redux/themeSlice";
import Nav from "../../component/Header/Nav/Nav";
import UndoButton from "../Buttons/UndoButton";
import OpenMenuButton from "../Buttons/OpenMenuButton";
import CloseMenuButton from "../Buttons/CloseMenuButton";
import ThemeButton from "../Buttons/ThemeButton";

function Header({ title, page }) {
  const [isClicked, setIsClicked] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark"; 
  //const themeDark = theme === "dark" ? true : ""; 
  //tutaj zostaje mi false w klasach, może lepiej null czy pusty string - dobra praktyka - i don't know
  const homeUrl = useSelector((state) => state.url.homeLink);
  const dispatch = useDispatch();
  const location = useLocation();
  const prevLocation = useLocation(-1);
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
    } else return -1    
  }

  return (
    <>
      <header className={`header ${themeDark && `header--dark`}`}>
        {page === "home" ? (
          <>
            <OpenMenuButton
              className={
                isClicked
                  ? `header__button-menu--disactive`
                  : `header__button-menu ${
                      themeDark && `header__button-menu--dark`
                    }`
              }
              onClick={handleMenuClick}
            />
            <CloseMenuButton
              className={
                isClicked
                  ? `header__button-menu ${
                      themeDark && `header__button-menu--dark`
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
              themeDark && `header__button-back--dark`
            }`}
          />
        )}
        <h1>{title}</h1>
        <ThemeButton
          onClick={handleThemeClick}
          className={`header__button-theme ${
            themeDark && `header__button-theme--dark`
          }`}
        />
      </header>
      {isClicked && <Nav />}
    </>
  );
}

export default Header;
