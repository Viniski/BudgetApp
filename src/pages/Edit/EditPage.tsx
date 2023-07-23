import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTransactionStore } from "../../store/transactions";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { useTransactionById } from "../../hooks/useTransactionById";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/UI/Inputs/Input";
import { SelectCategoryInput } from "../../components/UI/Inputs/SelectCategoryInput";
import { SelectTypeInput } from "../../components/UI/Inputs/SelectTypeInput";

export function EditPage() {
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

  const invalidButton = Boolean(
    [amount.valid, title.valid, date.valid].filter((valid) => valid === false)
      .length
  );

  const handleEditButton = () => {
    const editTransaction = {
      amount: amount.value,
      category,
      date: date.value,
      id: Number(id),
      note,
      title: title.value,
      type,
    };
    useTransactionStore((state) => state.edit(editTransaction));
    navigate("/");
  };

  useWebsiteTitle("Edytuj transakcje | BudgetApp by Viniski");

  return (
    <>
      <Header title="Edytuj transakcje" />
      <section className="inputs-section">
        <Input
          type="text"
          placeholder="Tytuł"
          value={title.value}
          onChange={(value) => setTitle({ value, valid: Boolean(value) })}
        />
        <Input
          type="text"
          placeholder="Wartość"
          value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}
        />
        <Input
          type="date"
          value={date.value}
          onChange={(value) => setDate({ value, valid: Boolean(value) })}
        />
        <SelectTypeInput value={type} onChange={(value) => setType(value)} />
        <SelectCategoryInput
          type={type}
          value={category}
          onChange={(value) => setCategory(value)}
        />
        <Input
          type="text"
          placeholder="Notatki"
          value={note}
          onChange={(value) => setNote(value)}
        />
        <button
          onClick={handleEditButton}
          disabled={invalidButton}
          className="button-options"
          aria-label="Edytuj transakcje"
        >
          Edytuj transakcje
        </button>
      </section>
    </>
  );
}
