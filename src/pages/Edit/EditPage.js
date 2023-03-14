import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../redux/transactionsSlice";
import { useWebsiteTitle } from "../../hooks/useWebstiteTitle";
import { Header } from "../../component/Header/Header";
import { Input } from "../../UI/Inputs/Input";
import { SectionInputLabel } from "../../UI/Labels/SectionInputLabel";
import { SelectCategoryInput } from "../../UI/Inputs/SelectCategoryInput";
import { SelectTypeInput } from "../../UI/Inputs/SelectTypeInput";

export function EditPage() {
  const { id } = useParams();
  const transaction = useSelector(
    (state) =>
      state.transactions.filter(
        (transaction) => transaction.id === Number(id)
      )[0]
  );

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
  console.log(category, type);
  const [date, setDate] = useState({
    value: transaction.date,
    valid: true,
  });
  const [note, setNote] = useState(transaction.note);
  const dispatch = useDispatch();
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
    dispatch(edit(editTransaction));
    navigate("/");
  };

  useWebsiteTitle("Edytuj transakcje | BudgetApp by Viniski");

  return (
    <>
      <Header title="Edytuj transakcje" />
      <section className="inputs-section">
        <SectionInputLabel value={title.value} title="Tytuł transakcji:" />
        <Input
          type="text"
          placeholder="Tytuł transakcji"
          value={title.value}
          onChange={(value) => setTitle({ value, valid: Boolean(value) })}
        />
        <SectionInputLabel value={amount.value} title="Kwota transakcji:" />
        <Input
          type="text"
          placeholder="Kwota transakcji"
          value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}
        />
        <SectionInputLabel value={date.value} title="Data transakcji:" />
        <Input
          type="date"
          value={date.value}
          onChange={(value) => setDate({ value, valid: Boolean(value) })}
        />
        <SectionInputLabel value={type} title="Typ transakcji:" />
        <SelectTypeInput
          value={type}
          onChange={(value) => {
            setType(value);
            setCategory("");
          }}
        />
        <SectionInputLabel value={category} title="Kategoria:" />
        <SelectCategoryInput
          type={type}
          value={category}
          onChange={(value) => setCategory(value)}
        />
        <SectionInputLabel value={note} title="Notatki:" />
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
        >
          Edytuj transakcje
        </button>
      </section>
    </>
  );
}
