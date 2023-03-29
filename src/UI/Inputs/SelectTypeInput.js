import { useSelector } from "react-redux";

export const SelectTypeInput = (onChange, value) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

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
