import { useSelector } from "react-redux";

const SelectCategoryInput = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  return (
    <select
      onChange={(e) => props.onChange(e.target.value)}
      defaultValue=""
      className={`inputs-section__input ${
        themeDark && `inputs-section__input--dark`
      }`}
    >
      {props.type === "expense" ? (
        <>
          <option value="" disabled hidden>
            Kategoria
          </option>
          <option value="fixed">Koszty stałe</option>
          <option value="food">Jedzenie</option>
          <option value="transport">Transport</option>
          <option value="hobby">Rozrywka</option>
          <option value="other">Inne</option>
        </>
      ) : (
        <>
          <option value="" disabled hidden>
            Kategoria
          </option>
          <option value="income">Dochód stały</option>
          <option value="income-extra">Dochód dodatkowy</option>
          <option value="other">Inne</option>
        </>
      )}
    </select>
  );
};

export default SelectCategoryInput;
