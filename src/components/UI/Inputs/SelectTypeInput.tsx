import { useTheme } from "../../../hooks/useTheme";

type Props = {
  onChange: (value: string) => void;
  value?: string;
};

export const SelectTypeInput = ({ onChange, value }: Props) => {
  const isDarkTheme = useTheme();

  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      defaultValue={value || ""}
      className={`inputs-section__input ${
        isDarkTheme && `inputs-section__input--dark`
      }`}
      data-testid="select-type-input"
    >
      <option value="" disabled hidden>
        Typ
      </option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
  );
};
