import { useSelector } from "react-redux";

const SelectTypeInput = (onChange, value, className) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : "";

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-${className}__input ${
        themeDark && `inputs-${className}__input--dark`
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

SelectTypeInput.defaultProps = {
  className: "section",
};

export default SelectTypeInput;
