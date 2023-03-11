import { useSelector } from "react-redux";

export const SelectTypeInput = (onChange, value) => {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-section__input ${
        isDarkTheme && `inputs-section__input--dark`
      }`}
      data-testid="select-type-input"
    >
      <option value="" disabled hidden>
        Typ
      </option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
  );
};
