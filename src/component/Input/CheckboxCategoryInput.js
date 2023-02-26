const CheckboxCategoryInput = ({ type, value, onChange, className }) => {
  return (
    <>
      {type === "all" ? (
        <>
          <label className={className}>
            <input
              type="checkbox"
              value="Dochód stały"
              checked={value.find((x) => x === "Dochód stały") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód stały
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Dochód dodatkowy"
              checked={value.find((x) => x === "Dochód dodatkowy") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód dodatkowy
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Koszty stałe"
              checked={value.find((x) => x === "Koszty stałe") || ""}
              onChange={(e) => onChange(e)}
            />
            Koszty stałe
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Jedzenie"
              checked={value.find((x) => x === "Jedzenie") || ""}
              onChange={(e) => onChange(e)}
            />
            Jedzenie
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Transport"
              checked={value.find((x) => x === "Transport") || ""}
              onChange={(e) => onChange(e)}
            />
            Transport
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Rozrywka"
              checked={value.find((x) => x === "Rozrywka") || ""}
              onChange={(e) => onChange(e)}
            />
            Rozrywka
          </label>
          <label className={className}>
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
          <label className={className}>
            <input
              type="checkbox"
              value="Koszty stałe"
              checked={value.find((x) => x === "Koszty stałe") || ""}
              onChange={(e) => onChange(e)}
            />
            Koszty stałe
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Jedzenie"
              checked={value.find((x) => x === "Jedzenie") || ""}
              onChange={(e) => onChange(e)}
            />
            Jedzenie
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Transport"
              checked={value.find((x) => x === "Transport") || ""}
              onChange={(e) => onChange(e)}
            />
            Transport
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Rozrywka"
              checked={value.find((x) => x === "Rozrywka") || ""}
              onChange={(e) => onChange(e)}
            />
            Rozrywka
          </label>
          <label className={className}>
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
          <label className={className}>
            <input
              type="checkbox"
              value="Dochód stały"
              checked={value.find((x) => x === "Dochód stały") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód stały
          </label>
          <label className={className}>
            <input
              type="checkbox"
              value="Dochód dodatkowy"
              checked={value.find((x) => x === "Dochód dodatkowy") || ""}
              onChange={(e) => onChange(e)}
            />
            Dochód dodatkowy
          </label>
          <label className={className}>
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

CheckboxCategoryInput.defaultProps = {
  className: "section"
}

export default CheckboxCategoryInput;
