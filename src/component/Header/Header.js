import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toogle } from "../../redux/themeSlice";
import useLocalStorage from "../../hooks/useLocalStorage";
import Nav from "../../component/Header/Nav/Nav";

function Header({title, page}) {
  const [isClicked, setIsClicked] = useState(false);
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  const dispatch = useDispatch();
  const [localStorage, setLocalStorage] = useLocalStorage("theme");
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };

  const handleThemeClick = () => {
    dispatch(toogle());
    setLocalStorage(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <header className={`header ${themeDark && `header--dark`}`}>
        {page === "home" ? (
          <>
            <button
              className={
                isClicked
                  ? `header__button-menu--disactive`
                  : `header__button-menu ${themeDark && `header__button-menu--dark`}`
              }
              onClick={handleMenuClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <button
              className={
                isClicked
                  ? `header__button-menu ${themeDark && `header__button-menu--dark`}`
                  : `header__button-menu--disactive`
              }
              onClick={handleMenuClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate(-1)}
            className={`header__button-back ${themeDark && `header__button-back--dark`}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          </button>
        )}
        <h1>{title}</h1>
        <button
          onClick={handleThemeClick}
          className={`header__button-theme ${themeDark && `header__button-theme--dark`}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
          </svg>
        </button>
      </header>
      {isClicked ? <Nav /> : null}
    </>
  );
}

export default Header;
