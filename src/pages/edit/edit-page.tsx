import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '@/components/header/header-dupa';
import { Input } from '@/components/ui/inputs/input';
import { SelectCategoryInput } from '@/components/ui/inputs/select-category-input';
import { SelectTypeInput } from '@/components/ui/inputs/select-type-input';
import { useTransactionById } from '@/hooks/use-transaction-by-id';
import { useWebsiteTitle } from '@/hooks/use-webstite-title';
import { useTransactionStore } from '@/store/transactions';

export const EditPage = () => {
  const { id } = useParams();
  const transaction = useTransactionById(id);

  const [amount, setAmount] = useState({
    value: transaction.amount,
    valid: true,
  });
  const [title, setTitle] = useState({
    value: transaction.title,
    valid: true,
  });
  const [category, setCategory] = useState(transaction.category);
  const [type, setType] = useState(transaction.type);
  const [date, setDate] = useState({
    value: transaction.date,
    valid: true,
  });
  const [note, setNote] = useState(transaction.note);
  const navigate = useNavigate();
  const editTransaction = useTransactionStore((state) => state.edit);

  const invalidButton = Boolean([amount.valid, title.valid, date.valid].filter((valid) => valid === false).length);

  const handleEditButton = () => {
    const editedTransaction = {
      amount: amount.value,
      category,
      date: date.value,
      id: Number(id),
      note,
      title: title.value,
      type,
    };
    editTransaction(editedTransaction);
    navigate('/');
  };

  useWebsiteTitle('Edytuj transakcje | BudgetApp by Viniski');

  return (
    <>
      <Header title="Edytuj transakcje" />
      <section className="inputs-section">
        <Input
          placeholder="Tytuł"
          type="text"
          value={title.value}
          onChange={(value) => setTitle({ value: value as string, valid: Boolean(value) })}
        />
        <Input
          placeholder="Wartość"
          type="text"
          value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}
        />
        <Input
          type="date"
          value={date.value}
          onChange={(value) => setDate({ value: value as string, valid: Boolean(value) })}
        />
        <SelectTypeInput value={type} onChange={(value) => setType(value)} />
        <SelectCategoryInput type={type} value={category} onChange={(value) => setCategory(value)} />
        <Input placeholder="Notatki" type="text" value={note} onChange={(value) => setNote(value as string)} />
        <button
          aria-label="Edytuj transakcje"
          className="button-options"
          disabled={invalidButton}
          type="button"
          onClick={handleEditButton}
        >
          Edytuj transakcje
        </button>
      </section>
    </>
  );
};
