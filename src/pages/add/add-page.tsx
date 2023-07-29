import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/header/header-dupa';
import { Input } from '@/components/ui/inputs/input';
import { SelectCategoryInput } from '@/components/ui/inputs/select-category-input';
import { formatDate } from '@/helpers/format-date';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { useTransactionStore } from '@/store/transactions';

type Props = {
  type: string;
  name: string;
};

export const AddPage = ({ type, name }: Props) => {
  const [amount, setAmount] = useState({ value: '', valid: false });
  const [title, setTitle] = useState({ value: '', valid: false });
  const [category, setCategory] = useState({ value: '', valid: false });
  const today = formatDate(new Date());
  const [date, setDate] = useState({ value: today, valid: true });
  const [note, setNote] = useState('');
  const navigate = useNavigate();
  const addTransaction = useTransactionStore((state) => state.add);

  const invalidButton = Boolean(
    [amount.valid, title.valid, category.valid, date.valid].filter((valid) => valid === false).length,
  );

  const getRandomNumber = () => Math.floor(Math.random() * 1000000);

  const handleAddTransaction = () => {
    const newTransaction = {
      amount: amount.value,
      category: category.value,
      date: date.value,
      id: getRandomNumber(),
      note,
      title: title.value,
      type,
    };
    addTransaction(newTransaction);
    navigate('/');
  };

  useWebsiteTitle('Dodaj transakcje | BudgetApp by Viniski');

  return (
    <>
      <Header title={`Dodaj ${name}`} />
      <section className="inputs-section">
        <Input
          placeholder="Tytuł"
          type="text"
          value={title.value}
          onChange={(value) => setTitle({ value: value as string, valid: Boolean(value) })}
        />
        <Input
          placeholder="Wartość"
          type="number"
          value={amount.value}
          onChange={(value) => setAmount({ value: value as string, valid: Boolean(value) })}
        />
        <SelectCategoryInput
          type={type}
          value={category.value}
          onChange={(value) => setCategory({ value, valid: Boolean(value) })}
        />
        <Input
          max={today}
          type="date"
          value={date.value}
          onChange={(value) => setDate({ value: value as string, valid: Boolean(value) })}
        />
        <Input placeholder="Notatki" type="text" value={note} onChange={(value) => setNote(value as string)} />
        <button
          aria-label="Dodaj transakcje"
          className="button-options"
          disabled={invalidButton}
          type="button"
          onClick={handleAddTransaction}
        >{`Dodaj ${name}`}</button>
      </section>
    </>
  );
};
