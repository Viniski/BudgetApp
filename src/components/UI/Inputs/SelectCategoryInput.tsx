import { useTheme } from "../../../hooks/useTheme";

type Props = {
  type: string;
  onChange: (value: string) => void;
  value?: string;
  variant?: string;
};

export const SelectCategoryInput = ({
  type,
  onChange,
  value,
  variant = "section",
}: Props) => {
  const isDarkTheme = useTheme();

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-${variant}__input ${
        isDarkTheme && `inputs-${variant}__input--dark`
      }`}
      data-testid="select-category-input"
    >
      {type === "all" ? (
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
      ) : type === "expense" ? (
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
