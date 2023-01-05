import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../../redux/transactionsSlice";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import { formatDate } from "../../component/helpers/formatDate";

function AddPage({ type, name }) {
  const [amount, setAmount] = useState({ value: "", valid: false });
  const [title, setTitle] = useState({ value: "", valid: false });
  const [category, setCategory] = useState({ value: "", valid: false });
  const today = formatDate(new Date());
  const [date, setDate] = useState({ value: today, valid: false });
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validButton = Boolean(
    [amount.valid, title.valid, category.valid, date.valid].filter(
      (valid) => valid === false
    ).length
  );

  console.log(date, validButton);

  const getRandomNumber = () => Math.floor(Math.random() * 1000000);

  const handleAddTransaction = () => {
    console.log("dodaj");
    const newTransaction = {
      amount: type === "expense" ? `-${amount} $` : `+${amount} $`,
      category,
      date,
      id: getRandomNumber(),
      note,
      title,
      type,
    };
    console.log(newTransaction);
    dispatch(add(newTransaction));
    navigate("/");
  };

  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Dodaj ${name}`} />
      <section className="inputs-section">
        <Input
          type="number"
          placeholder="Wartość"
          value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}
        />
        <Input
          type="text"
          placeholder="Tytuł"
          value={title.value}
          onChange={(value) => setTitle(value)}
        />
        <SelectCategoryInput
          type={type}
          value={category.value}
          onChange={(value) => setCategory(value)}
        />
        <Input
          type="date"
          max={today}
          value={date}
          onChange={(value) => setDate(value)}
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
          disabled={validButton}
        >{`Dodaj ${name}`}</button>
      </section>
    </>
  );
}

export default AddPage;
