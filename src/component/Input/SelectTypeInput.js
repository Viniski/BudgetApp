import { useSelector } from "react-redux";

const SelectTypeInput = (onChange, value) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : "";

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-section__input ${
        themeDark && `inputs-section__input--dark`
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

export default SelectTypeInput;
