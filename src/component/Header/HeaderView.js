import React from "react";
import { HeaderNav } from "../../navigation/components/HeaderNav/HeaderNav";
import { UndoButton } from "../../UI/Buttons/UndoButton";
import { OpenMenuButton } from "../../UI/Buttons/OpenMenuButton";
import { CloseMenuButton } from "../../UI/Buttons/CloseMenuButton";
import { ThemeButton } from "../../UI/Buttons/ThemeButton";

export function HeaderView({
  title,
  isClicked,
  isDarkTheme,
  handleMenuClick,
  handleThemeClick,
  getUndoPage,
  navigate,
  pathname,
}) {
  return (
    <>
      <header className={`header ${isDarkTheme && `header--dark`}`}>
        {pathname === "/" ? (
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
