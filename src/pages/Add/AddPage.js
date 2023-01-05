import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/transactionsSlice";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import { formatDate } from "../../component/helpers/formatDate";

function AddPage({ type, name }) {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const today = formatDate(new Date());
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const getRandomNumber = () => Math.floor(Math.random() * 1000000);

  const handleAddTransaction = () => {
    console.log("dodaj");
    const newTransaction = {
      amount,
      category,
      date,
      id: getRandomNumber(),
      note,
      title,
      type,
    }
    console.log(newTransaction);
    dispatch(add(newTransaction));
  };

  // console.log(date, amount, title, category, note);

  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Dodaj ${name}`} />
      <section className="inputs-section">
        <Input
          type="number"
          placeholder="Wartość"
          value={amount}
          onChange={(value) => setAmount(value)}
        />
        <Input
          type="text"
          placeholder="Tytuł"
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <SelectCategoryInput
          type={type}
          value={note}
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
        >{`Dodaj ${name}`}</button>
      </section>
    </>
  );
}

export default AddPage;
