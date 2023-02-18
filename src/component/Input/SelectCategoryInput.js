import { useSelector } from "react-redux";

const SelectCategoryInput = (props) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark" ? true : ""; 

  return (
    <select
      onChange={(e) => props.onChange(e.target.value)}
      defaultValue={props.value || ""}
      className={`inputs-${props.className}__input ${
        themeDark && `inputs-${props.className}__input--dark`
      }`}
    >
      {props.type === "all" ? (
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
      ) : props.type === "expense" ? (
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
  className: "section"
}

export default SelectCategoryInput;
