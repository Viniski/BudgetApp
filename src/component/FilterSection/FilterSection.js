import { useState } from "react";
import Input from "../Input/Input";
import CheckboxCategoryInput from "../Input/CheckboxCategoryInput";
import { formatDate } from "../helpers/formatDate";

function FilterSection({ type, title, onFilter }) {
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState(today);
  const [selectedCategory, setSelectedCategory] = useState(["Dochód stały", "Dochód dodatkowy"]);
  const objectToFilter = {minAmount, maxAmount, startDate, endDate, selectedCategory}

  // console.log(minAmount, maxAmount, startDate, endDate, selectedCategory);

  const changeCheckboxInput = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value, isChecked);
     
    if (isChecked) {
      console.log(selectedCategory, isChecked)
      const newSelectedCategory = [...selectedCategory, value]
      console.log(newSelectedCategory);
      setSelectedCategory(newSelectedCategory);
    } else {
      console.log(selectedCategory, isChecked)
      const newSelectedCategory = selectedCategory.filter((category) => category !== value)
      console.log(newSelectedCategory);
      setSelectedCategory(newSelectedCategory);
    }
  };
  
  const handleFilterButton = (para) => {
    onFilter(para);
  };

  return (
    <section className="inputs-filter">
      <Input
        type="number"
        placeholder="Od"
        value={minAmount}
        onChange={(value) => setMinAmount(value)}
        className="filter"
      />
      <Input
        type="number"
        placeholder="Do"
        value={maxAmount}
        onChange={(value) => setMaxAmount(value)}
        className="filter"
      />
      <Input
        type="date"
        max={today}
        value={startDate}
        onChange={(value) => setStartDate(value)}
        className="filter"
      />
      <Input
        type="date"
        max={today}
        value={endDate}
        onChange={(value) => setEndDate(value)}
        className="filter"
      />
      <CheckboxCategoryInput
        value={selectedCategory}
        onChange={changeCheckboxInput}
        type={type}
        className="filter"
      />
      <button
        onClick={() => handleFilterButton(objectToFilter)}
        className="button-options"
      >{`Filtruj ${title}`}</button>
    </section>
  );
}

export default FilterSection;
