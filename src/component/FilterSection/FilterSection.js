import { useState } from "react";
import Input from "../Input/Input";
import SelectCategoryInput from "../Input/SelectCategoryInput";
import { formatDate } from "../helpers/formatDate";

function FilterSection({ type, title }) {
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState(today);

  const handleFilterButton = () => {
    console.log("filtruj" + type);
  };

  return (
    <section className="inputs-filter">
      <Input type="number" placeholder="Od" className="filter" />
      <Input type="number" placeholder="Do" className="filter" />
      <Input
        type="date"
        max={endDate}
        onChange={(value) => setStartDate(value)}
        className="filter"
      />
      <Input
        type="date"
        max={endDate}
        value={endDate}
        onChange={(value) => setEndDate(value)}
        className="filter"
      />
      <SelectCategoryInput type={type} className="filter"/>
      <button
        onClick={handleFilterButton}
        className="button-options"
      >{`Filtruj ${title}`}</button>
    </section>
  );
}

export default FilterSection;
