import { useSelector } from "react-redux";

const SelectTypeInput = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : ""; 

    return (
      <select onChange={(e) => props.onChange(e.target.value)} defaultValue={props.value || ""} className={`inputs-${props.className}__input ${themeDark && `inputs-${props.className}__input--dark`}`}>
      <option value="" disabled hidden>Typ</option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
    );
  };

  SelectTypeInput.defaultProps = {
    className: "section"
  }

export default SelectTypeInput;