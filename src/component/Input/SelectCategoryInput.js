import { useSelector } from "react-redux";

export const SelectCategoryInput = ({ type, onChange, value, className }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-${className}__input ${
        isDarkTheme && `inputs-${className}__input--dark`
      }`}
      data-testid="select-category-input"
    >
      {type === "all" ? (
        <>
          <option value="" disabled hidden>
            Kategoria
          </option>
          <option value="Dochód stały">Dochód stały</option>
          <option value="Dochód dodatkowy">Dochód dodatkowy</option>
          <option value="Koszty stałe">Koszty stałe</option>
          <option value="Jedzenie">Jedzenie</option>
          <option value="Transport">Transport</option>
          <option value="Rozrywka">Rozrywka</option>
          <option value="Inne">Inne</option>
        </>
      ) : type === "expense" ? (
        <>
          <option value="" disabled hidden>
            Kategoria
          </option>
          <option value="Koszty stałe">Koszty stałe</option>
          <option value="Jedzenie">Jedzenie</option>
          <option value="Transport">Transport</option>
          <option value="Rozrywka">Rozrywka</option>
          <option value="Inne">Inne</option>
        </>
      ) : (
        <>
          <option value="" disabled hidden>
            Kategoria
          </option>
          <option value="Dochód stały">Dochód stały</option>
          <option value="Dochód dodatkowy">Dochód dodatkowy</option>
          <option value="Inne">Inne</option>
        </>
      )}
    </select>
  );
};

SelectCategoryInput.defaultProps = {
  className: "section",
};
