import { clsx } from 'clsx';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  onChange: (value: string) => void;
  value?: string;
};

export const SelectTypeInput = ({ onChange, value }: Props) => {
  const isDarkTheme = useTheme();

  return (
    <select
      className={clsx('inputs-section__input', isDarkTheme && 'inputs-section__input--dark')}
      data-testid="select-type-input"
      defaultValue={value || ''}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled hidden value="">
        Typ
      </option>
      <option value="income">Dochód</option>
      <option value="expense">Wydatek</option>
    </select>
  );
};
