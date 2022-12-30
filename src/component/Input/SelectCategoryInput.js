import { useSelector } from "react-redux";

const SelectCategoryInput = () => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  return (
    <select className={`inputs-section__input ${themeDark && `inputs-section__input--dark`}`}>
      <option value="" disabled selected hidden>Kategoria</option>
      <option value="fixed">Koszty stałe</option>
      <option value="food">Jedzenie</option>
      <option value="transport">Transport</option>
      <option value="hobby">Rozrywka</option>
      <option value="other">inne</option>
    </select>
  );
};

export default SelectCategoryInput;
