import { useState } from "react";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import { formatDate } from "../../component/helpers/formatDate";

function AddPage(props) {
  console.log(props.type);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const today = formatDate(new Date());
  const [date, setDate] = useState(today);
  const [note, setNote] = useState("");

  console.log(date, amount, title, category, note);

  useWebsiteTitle("Dodaj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Dodaj ${props.title}`} />
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
            type={props.type}
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
        <button className="button-options">{`Dodaj ${props.title}`}</button>
      </section>
    </>
  );
}

export default AddPage;
