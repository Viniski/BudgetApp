import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  type: string;
  onChange: (value: string) => void;
  value?: string;
  variant?: string;
};

export const SelectCategoryInput = ({ type, onChange, value, variant = 'section' }: Props) => {
  const isDarkTheme = useTheme();

  return (
    <select
      className={clsx(`inputs-${variant}__input`, isDarkTheme && `inputs-${variant}__input--dark`)}
      data-testid="select-category-input"
      defaultValue={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      {type === 'all' && (
        <>
          <option disabled hidden value="">
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
      )}
      {type === 'expense' && (
        <>
          <option disabled hidden value="">
            Kategoria
          </option>
          <option value="Koszty stałe">Koszty stałe</option>
          <option value="Jedzenie">Jedzenie</option>
          <option value="Transport">Transport</option>
          <option value="Rozrywka">Rozrywka</option>
          <option value="Inne">Inne</option>
        </>
      )}
      {type === 'income' && (
        <>
          <option disabled hidden value="">
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
