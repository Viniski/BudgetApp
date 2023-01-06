import { useState } from "react";
import useWebsiteTitle from "../../hooks/useWebstiteTitle";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SelectCategoryInput from "../Input/SelectCategoryInput";
import { formatDate } from "../helpers/formatDate";

function FilterPage({title, type}) {
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState(today);

  const handleFilterButton = () => {
    console.log("filtruj" + type);
  }

  console.log(type);
  useWebsiteTitle("Filtruj transakcje | BudgetApp by Viniski");
  return (
    <>
      <Header title={`Filtruj ${title}`} />
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
        <SelectCategoryInput type={type}/>
        <button onClick={handleFilterButton} className="button-options">{`Filtruj ${title}`}</button>
      </section>
    </>
  );
}

export default FilterPage;
