import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../../redux/themeSlice";
import { HeaderView } from "./HeaderView";

export function HeaderContainer({ title }) {
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
    <HeaderView
      title={title}
      isClicked={isClicked}
      isDarkTheme={isDarkTheme}
      handleMenuClick={handleMenuClick}
      handleThemeClick={handleThemeClick}
      getUndoPage={getUndoPage}
      navigate={navigate}
      pathname={location.pathname}
    />
  );
}
