type Props = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string[];
  variant?: string;
};

export const CheckboxCategoryInput = ({
  type,
  value,
  onChange,
  variant = "section",
}: Props) => {
  return (
    <>
      {type === "all" ? (
        <>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Dochód stały"
                checked={Boolean(value.find((x) => x === "Dochód stały"))}
                onChange={(e) => onChange(e)}
              />
              Dochód stały
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Dochód dodatkowy"
                checked={Boolean(value.find((x) => x === "Dochód dodatkowy"))}
                onChange={(e) => onChange(e)}
              />
              Dochód dodatkowy
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Koszty stałe"
                checked={Boolean(value.find((x) => x === "Koszty stałe"))}
                onChange={(e) => onChange(e)}
              />
              Koszty stałe
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Jedzenie"
                checked={Boolean(value.find((x) => x === "Jedzenie"))}
                onChange={(e) => onChange(e)}
              />
              Jedzenie
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Transport"
                checked={Boolean(value.find((x) => x === "Transport"))}
                onChange={(e) => onChange(e)}
              />
              Transport
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Rozrywka"
                checked={Boolean(value.find((x) => x === "Rozrywka"))}
                onChange={(e) => onChange(e)}
              />
              Rozrywka
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Inne"
                checked={Boolean(value.find((x) => x === "Inne"))}
                onChange={(e) => onChange(e)}
              />
              Inne
            </label>
          </div>
        </>
      ) : type === "expense" ? (
        <>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Koszty stałe"
                checked={Boolean(value.find((x) => x === "Koszty stałe"))}
                onChange={(e) => onChange(e)}
              />
              Koszty stałe
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Jedzenie"
                checked={Boolean(value.find((x) => x === "Jedzenie"))}
                onChange={(e) => onChange(e)}
              />
              Jedzenie
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Transport"
                checked={Boolean(value.find((x) => x === "Transport"))}
                onChange={(e) => onChange(e)}
              />
              Transport
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Rozrywka"
                checked={Boolean(value.find((x) => x === "Rozrywka"))}
                onChange={(e) => onChange(e)}
              />
              Rozrywka
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Inne"
                checked={Boolean(value.find((x) => x === "Inne"))}
                onChange={(e) => onChange(e)}
              />
              Inne
            </label>
          </div>
        </>
      ) : (
        <>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Dochód stały"
                checked={Boolean(value.find((x) => x === "Dochód stały"))}
                onChange={(e) => onChange(e)}
              />
              Dochód stały
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Dochód dodatkowy"
                checked={Boolean(value.find((x) => x === "Dochód dodatkowy"))}
                onChange={(e) => onChange(e)}
              />
              Dochód dodatkowy
            </label>
          </div>
          <div className={variant}>
            <label>
              <input
                type="checkbox"
                value="Inne"
                checked={Boolean(value.find((x) => x === "Inne"))}
                onChange={(e) => onChange(e)}
              />
              Inne
            </label>
          </div>
        </>
      )}
    </>
  );
};
