import { useSelector } from "react-redux";

const SelectTypeInput = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
    return (
      <select className={`inputs-section__input ${themeDark && `inputs-section__input--dark`}`}>
      <option value="" disabled selected hidden>Typ</option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
    );
  };

export default SelectTypeInput;