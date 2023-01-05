import { useSelector } from "react-redux";

const SelectTypeInput = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
    return (
      <select onChange={(e) => props.onChange(e.target.value)} defaultValue={props.value || ""} className={`inputs-section__input ${themeDark && `inputs-section__input--dark`}`}>
      <option value="" disabled hidden>Typ</option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
    );
  };

export default SelectTypeInput;