import { useSelector } from "react-redux";

const CheckboxCategoryInput = ({ type, value, onChange }) => {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  // console.log("value", value, value.find((x) => x === "Dochód stały") || "");
  //A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component
  return (
    <>
      {type === "all" ? (
        <>
          <label>
            <input
              type="checkbox"
              value="Dochód stały"
              checked={value.find((x) => x === "Dochód stały") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód stały
          </label>
          <label>
            <input
              type="checkbox"
              value="Dochód dodatkowy"
              checked={value.find((x) => x === "Dochód dodatkowy") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód dodatkowy
          </label>
          <label>
            <input
              type="checkbox"
              value="Koszty stałe"
              checked={value.find((x) => x === "Koszty stałe") || ""}
              onChange={(e) => onChange(e)}
            />
            Koszty stałe
          </label>
          <label>
            <input
              type="checkbox"
              value="Jedzenie"
              checked={value.find((x) => x === "Jedzenie") || ""}
              onChange={(e) => onChange(e)}
            />
            Jedzenie
          </label>
          <label>
            <input
              type="checkbox"
              value="Transport"
              checked={value.find((x) => x === "Transport") || ""}
              onChange={(e) => onChange(e)}
            />
            Transport
          </label>
          <label>
            <input
              type="checkbox"
              value="Rozrywka"
              checked={value.find((x) => x === "Rozrywka") || ""}
              onChange={(e) => onChange(e)}
            />
            Rozrywka
          </label>
          <label>
            <input
              type="checkbox"
              value="Inne"
              checked={value.find((x) => x === "Inne") || ""}
              onChange={(e) => onChange(e)}
            />
            Inne
          </label>
        </>
      ) : type === "expense" ? (
        <>
          <label>
            <input
              type="checkbox"
              value="Koszty stałe"
              checked={value.find((x) => x === "Koszty stałe") || ""}
              onChange={(e) => onChange(e)}
            />
            Koszty stałe
          </label>
          <label>
            <input
              type="checkbox"
              value="Jedzenie"
              checked={value.find((x) => x === "Jedzenie") || ""}
              onChange={(e) => onChange(e)}
            />
            Jedzenie
          </label>
          <label>
            <input
              type="checkbox"
              value="Transport"
              
              checked={value.find((x) => x === "Transport") || ""}
              onChange={(e) => onChange(e)}
            />
            Transport
          </label>
          <label>
            <input
              type="checkbox"
              value="Rozrywka"
              checked={value.find((x) => x === "Rozrywka") || ""}
              onChange={(e) => onChange(e)}
            />
            Rozrywka
          </label>
          <label>
            <input
              type="checkbox"
              value="Inne"
              checked={value.find((x) => x === "Inne") || ""}
              onChange={(e) => onChange(e)}
            />
            Inne
          </label>
        </>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              value="Dochód stały"
              checked={value.find((x) => x === "Dochód stały") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód stały
          </label>
          <label>
            <input
              type="checkbox"
              value="Dochód dodatkowy"
              checked={value.find((x) => x === "Dochód dodatkowy") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód dodatkowy
          </label>
          <label>
            <input
              type="checkbox"
              value="Inne"
              checked={value.find((x) => x === "Inne") || ""}
              onChange={(e) => onChange(e)}
            />
            Inne
          </label>
        </>
      )}
    </>
  );
};

export default CheckboxCategoryInput;
