import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { add } from "../../redux/transactionsSlice";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { Input } from "../../UI/Inputs/Input";
import { SelectCategoryInput } from "../../UI/Inputs/SelectCategoryInput";
import { formatDate } from "../../helpers/formatDate";

type Props = {
  type: string;
  name: string;
};

export function AddPage({ type, name }: Props) {
  const [amount, setAmount] = useState({ value: "", valid: false });
  const [title, setTitle] = useState({ value: "", valid: false });
  const [category, setCategory] = useState({ value: "", valid: false });
  const today = formatDate(new Date());
  const [date, setDate] = useState({ value: today, valid: true });
  const [note, setNote] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const invalidButton = Boolean(
    [amount.valid, title.valid, category.valid, date.valid].filter(
      (valid) => valid === false
    ).length
  );

  const getRandomNumber = () => Math.floor(Math.random() * 1000000);

  const handleAddTransaction = () => {
    console.log("dodaj", amount.value, typeof amount.value);
    const newTransaction = {
      amount: amount.value,
      category: category.value,
      date: date.value,
      id: getRandomNumber(),
      note,
      title: title.value,
      type,
    };
    dispatch(add(newTransaction));
    navigate("/");
  };

  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Dodaj ${name}`} />
      <section className="inputs-section">
        <Input
          type="text"
          placeholder="Tytuł"
          value={title.value}
          onChange={(value) => setTitle({ value, valid: Boolean(value) })}
        />
        <Input
          type="number"
          placeholder="Wartość"
          value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}
        />
        <SelectCategoryInput
          type={type}
          value={category.value}
          onChange={(value) => setCategory({ value, valid: Boolean(value) })}
        />
        <Input
          type="date"
          max={today}
          value={date.value}
          onChange={(value) => setDate({ value, valid: Boolean(value) })}
        />
        <Input
          type="text"
          placeholder="Notatki"
          value={note}
          onChange={(value) => setNote(value)}
        />
        <button
          onClick={handleAddTransaction}
          className="button-options"
          disabled={invalidButton}
        >{`Dodaj ${name}`}</button>
      </section>
    </>
  );
}
