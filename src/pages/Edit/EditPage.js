import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../redux/transactionsSlice";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import useLocalStorage from "../../hooks/useLocalStorage";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import SelectTypeInput from "../../component/Input/SelectTypeInput";

function EditPage() {
  const { id } = useParams();
  const state = useSelector((state) => state.transactions);
  const transaction = useSelector(
    (state) =>
      state.transactions.filter(
        (transaction) => transaction.id === Number(id)
      )[0]
  );
  const [localSotrage, setLocalStorage] = useLocalStorage("transactions");

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const invalidButton = Boolean(
    [amount.valid, title.valid, date.valid].filter((valid) => valid === false)
      .length
  );

  console.log(invalidButton, [amount.valid, title.valid, date.valid]);

  const handleEditButton = () => {
    console.log("działam");
    const editTransaction = {
      amount: amount.value,
      category,
      date: date.value,
      id: Number(id),
      note,
      title: title.value,
      type,
    };
    console.log(editTransaction);
    dispatch(edit(editTransaction));
    const newState = [...state];
    let index = newState.findIndex(
      (tranasaction) => tranasaction.id === Number(id)
    );
    newState[index] = editTransaction;
    setLocalStorage(newState);
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
        >
          Edytuj transakcje
        </button>
      </section>
    </>
  );
}

export default EditPage;
