import { useState } from "react";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../../component/Header/Header";
import Input from "../../component/Input/Input";
import SelectCategoryInput from "../../component/Input/SelectCategoryInput";

function FilterPage(props) {
  const [startDate, setStartDate] = useState("");
  function formatDate(date) {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    let year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState(today);

  console.log(props.type);
  useWebsiteTitle("Filtruj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Filtruj ${props.title}`} />
      <section className="inputs-section">
        <Input type="number" placeholder="Od" />
        <Input type="number" placeholder="Do" />
        <Input
          type="date"
          max={endDate}
          onChange={(value) => setStartDate(value)}
        />
        <Input
          type="date"
          max={endDate}
          value={endDate}
          onChange={(value) => setEndDate(value)}
        />
        <SelectCategoryInput />
        <button className="button-options">{`Filtruj ${props.title}`}</button>
      </section>
    </>
  );
}

export default FilterPage;
