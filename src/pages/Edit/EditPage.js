import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../redux/transactionsSlice";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";
import SelectTypeInput from "../../component/Input/SelectTypeInput";
import { useEffect } from "react";

function EditPage() {
  const { id } = useParams();
  const transaction = useSelector((state) => state.transactions.filter((transaction) => transaction.id === Number(id))[0]);  
  const [amount, setAmount] = useState({ value: transaction.amount, valid: false });
  const [title, setTitle] = useState({ value: transaction.title, valid: false });
  const [category, setCategory] = useState({ value: transaction.category, valid: false });
  const [type, setType] = useState({ value: transaction.type, valid: false });
  const [date, setDate] = useState({ value: transaction.date, valid: false });
  //tutaj walidacja category i type w zasadzie niepotrzebna :)
  const [note, setNote] = useState(transaction.note);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validButton = Boolean(
    [amount.valid, title.valid, category.valid, type.valid, date.valid].filter(
      (valid) => valid === false
    ).length
  );

  console.log(validButton);

  const handleEditButton = () => {
    console.log("działam");
    // const editTransaction = {
    //   amount: type === "expense" ? `-${amount.value} $` : `+${amount.value} $`,
    //   category,
    //   date,
    //   id,//to samo! ogólnie to będę zmieniał cały obiekt jakby
    //   note,
    //   title,
    //   type,
    // };
    // console.log(editTransaction);
    // dispatch(edit(editTransaction));
    // navigate("/");
  }

  useWebsiteTitle('Edytuj transakcje | BudgetApp by Viniski')
    return (
      <>
      <Header title="Edytuj transakcje" />
      <section className="inputs-section">
        <Input type="text" placeholder="Tytuł" value={title.value}
          onChange={(value) => setTitle({ value, valid: Boolean(value) })}/>
        <Input type="text" placeholder="Wartość" value={amount.value}
          onChange={(value) => setAmount({ value, valid: Boolean(value) })}/>
        <Input type="date" value={date.value}
          onChange={(value) => setDate({ value, valid: Boolean(value) })}/>
        <SelectTypeInput value={type.value} onChange={(value) => setType({ value, valid: Boolean(value) })}/>
        <SelectCategoryInput value={category.value}
          onChange={(value) => setCategory({ value, valid: Boolean(value) })}/>
        <Input type="text" placeholder="Notatki" value={note}
          onChange={(value) => setNote(value)}/>
        <button onClick={handleEditButton} className="button-options">Edytuj transakcje</button>
      </section>
    </>
    );
  }
  
  export default EditPage;