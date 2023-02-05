import { useState } from "react";
import Input from "../Input/Input";
import CheckboxCategoryInput from "../Input/CheckboxCategoryInput";
import ActiveFilterCriteria from "./ActiveFilterCriteria";
import { formatDate } from "../../helpers/formatDate";
import FilterButton from "../Buttons/FilterButton";
import CloseFilterButton from "../Buttons/CloseFilterButton";

function FilterSection({ type, title, onFilter, themeDark }) {
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState("");
  console.log("render");

  const getSelectedCategory = () => {
    return type === "all"
      ? [
          "Dochód stały",
          "Dochód dodatkowy",
          "Koszty stałe",
          "Jedzenie",
          "Transport",
          "Rozrywka",
          "Inne",
        ]
      : type === "expense"
      ? ["Koszty stałe", "Jedzenie", "Transport", "Rozrywka", "Inne"]
      : ["Dochód stały", "Dochód dodatkowy", "Inne"];
  };

  const [selectedCategory, setSelectedCategory] = useState(
    getSelectedCategory()
  );

  const [filterSectionState, setFilterSectionState] = useState({
    isFormActive: false,
    activeCriteria: {
      minAmount,
      maxAmount,
      startDate,
      endDate,
      selectedCategory,
    },
  });

  const objectToFilter = {
    minAmount,
    maxAmount,
    startDate,
    endDate,
    selectedCategory,
  };

  console.log(objectToFilter);

  const toogleFilterButton = () => {
    setFilterSectionState({
      ...filterSectionState,
      isFormActive: !filterSectionState.isFormActive,
    });
  };

  const changeCheckboxInput = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value, isChecked);

    if (isChecked) {
      console.log(selectedCategory, isChecked);
      const newSelectedCategory = [...selectedCategory, value];
      console.log(newSelectedCategory);
      setSelectedCategory(newSelectedCategory);
    } else {
      console.log(selectedCategory, isChecked);
      const newSelectedCategory = selectedCategory.filter(
        (category) => category !== value
      );
      console.log(newSelectedCategory);
      setSelectedCategory(newSelectedCategory);
    }
  };

  //params musi być ARRAY i musi być czytannie przez funkcję filtrującą niżej i komponent wyżej
  //w tym momęcie jest to: objectToFilter :)
  //i taka forma ma zostać, jest dobrze czytany przez funkcję filtrującą, tak napiszę komponent wyżej, że też to będzie czytał :)
  const handleFilterButton = (params) => {
    //zamiana kolejności
    console.log(params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    onFilter(params);
  };

  const handleDeleteCriteria = (params) => {
    console.log(params);
    onFilter(params);
  };

  const deleteFilterCriteria = (criteriaToDelete) => {
    console.log("usuwam - filterSection " + criteriaToDelete);
    switch (criteriaToDelete) {
      case "minAmount":
        console.log("minAmount");
        handleDeleteCriteria({
          minAmount: "",
          maxAmount,
          startDate,
          endDate,
          selectedCategory,
        });
        setMinAmount("");
        break;
      case "maxAmount":
        console.log("maxAmount");
        handleDeleteCriteria({
          minAmount,
          maxAmount: "",
          startDate,
          endDate,
          selectedCategory,
        });
        setMaxAmount("");
        break;
      case "startDate":
        console.log("startDate");
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate: "",
          endDate,
          selectedCategory,
        });
        setStartDate("");
        break;
      case "endDate":
        console.log("endDate");
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate: "",
          selectedCategory,
        });
        setEndDate("");
        break;
      case "selectedCategory":
        console.log("selectedCategory");
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate,
          selectedCategory:
            type === "all"
              ? [
                  "Dochód stały",
                  "Dochód dodatkowy",
                  "Koszty stałe",
                  "Jedzenie",
                  "Transport",
                  "Rozrywka",
                  "Inne",
                ]
              : type === "expense"
              ? ["Koszty stałe", "Jedzenie", "Transport", "Rozrywka", "Inne"]
              : ["Dochód stały", "Dochód dodatkowy", "Inne"],
        });
        setSelectedCategory(
          type === "all"
            ? [
                "Dochód stały",
                "Dochód dodatkowy",
                "Koszty stałe",
                "Jedzenie",
                "Transport",
                "Rozrywka",
                "Inne",
              ]
            : type === "expense"
            ? ["Koszty stałe", "Jedzenie", "Transport", "Rozrywka", "Inne"]
            : ["Dochód stały", "Dochód dodatkowy", "Inne"]
        );
        break;
      default:
        console.log("to nie powinno wyskoczyć xD");
        break;
    }
  };

  return (
    <>
      <FilterButton
        onClick={toogleFilterButton}
        className={
          filterSectionState.isFormActive
            ? `transaction-section__button-filter--disactive`
            : `transaction-section__button-filter ${
                themeDark && `transaction-section__button-filter--dark`
              }`
        }
      />
      <CloseFilterButton
        onClick={toogleFilterButton}
        className={
          filterSectionState.isFormActive
            ? `transaction-section__button-filter ${
                themeDark && `transaction-section__button-filter--dark`
              }`
            : `transaction-section__button-filter--disactive`
        }
      />
      {filterSectionState.isFormActive && (
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
      )}
      <ActiveFilterCriteria
        type={type}
        criteria={filterSectionState.activeCriteria}
        onFilter={deleteFilterCriteria}
        themeDark={themeDark}
      />
    </>
  );
}

export default FilterSection;
