type Props = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string[];
  variant?: string;
};

export const CheckboxCategoryInput = ({ type, value, onChange, variant = 'section' }: Props) => {
  const categories = [
    { label: 'Dochód stały', value: 'Dochód stały' },
    { label: 'Dochód dodatkowy', value: 'Dochód dodatkowy' },
    { label: 'Koszty stałe', value: 'Koszty stałe' },
    { label: 'Jedzenie', value: 'Jedzenie' },
    { label: 'Transport', value: 'Transport' },
    { label: 'Rozrywka', value: 'Rozrywka' },
    { label: 'Inne', value: 'Inne' },
  ];

  const filterCategories = () => {
    if (type === 'all') return categories;
    if (type === 'expense')
      return categories.filter((cat) => !['Dochód stały', 'Dochód dodatkowy'].includes(cat.value));

    return categories.filter((cat) => ['Dochód stały', 'Dochód dodatkowy', 'Inne'].includes(cat.value));
  };

  return (
    <>
      {filterCategories().map((category) => (
        <div key={category.value} className={variant}>
          <label htmlFor={`checkbox-${category.value}`}>
            <input
              checked={Boolean(value.find((x) => x === category.value))}
              id={`checkbox-${category.value}`}
              type="checkbox"
              value={category.value}
              onChange={(e) => onChange(e)}
            />
            {category.label}
          </label>
        </div>
      ))}
    </>
  );
};
