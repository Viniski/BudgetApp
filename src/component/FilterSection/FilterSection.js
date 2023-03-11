import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../redux/urlSlice";
import { Input } from "../Input/Input";
import { CheckboxCategoryInput } from "../Input/CheckboxCategoryInput";
import { ActiveFilterCriteria } from "./ActiveFilterCriteria";
import { formatDate } from "../../helpers/formatDate";
import { FilterButton } from "../Buttons/FilterButton";
import { CloseFilterButton } from "../Buttons/CloseFilterButton";
import { createFilterUrl } from "../../helpers/createFilterUrl";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function FilterSection({ type, title, criteria, isDarkTheme }) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState("");

  const getSelectedCategory = () => {
    if (location.pathname === "/") {
      return [
        "Dochód stały",
        "Dochód dodatkowy",
        "Koszty stałe",
        "Jedzenie",
        "Transport",
        "Rozrywka",
        "Inne",
      ];
    }
    if (location.pathname === "/wydatki") {
      return ["Koszty stałe", "Jedzenie", "Transport", "Rozrywka", "Inne"];
    }

    return ["Dochód stały", "Dochód dodatkowy", "Inne"];
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

  const getCategoryToDelete = (selectedCategory) => {
    let arrayAllCategories = getSelectedCategory();

    for (let i = 0; i < selectedCategory.length; i++) {
      arrayAllCategories = arrayAllCategories.filter(
        (element) => element !== selectedCategory[i]
      );
    }

    return [...arrayAllCategories];
  };

  const objectToFilter = {
    minAmount,
    maxAmount,
    startDate,
    endDate,
    selectedCategory: getCategoryToDelete(selectedCategory),
  };

  const toogleFilterButton = () => {
    setFilterSectionState({
      ...filterSectionState,
      isFormActive: !filterSectionState.isFormActive,
    });
  };

  const changeCheckboxInput = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      const newSelectedCategory = [...selectedCategory, value];
      setSelectedCategory(newSelectedCategory);
    } else {
      const newSelectedCategory = selectedCategory.filter(
        (category) => category !== value
      );
      setSelectedCategory(newSelectedCategory);
    }
  };

  const handleFilterButton = (params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    dispatch(
      location.pathname === "/"
        ? updateHomeURL(newUrl)
        : location.pathname === "/wydatki"
        ? updateExpenseURL(newUrl)
        : updateIncomeURL(newUrl)
    );
    navigate(newUrl);
  };

  const handleDeleteCriteria = (params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false }); //why?
    dispatch(
      location.pathname === "/"
        ? updateHomeURL(newUrl)
        : location.pathname === "/wydatki"
        ? updateExpenseURL(newUrl)
        : updateIncomeURL(newUrl)
    );
    navigate(newUrl);
  };

  const deleteFilterCriteria = (criteriaToDelete) => {
    switch (criteriaToDelete) {
      case "minAmount":
        handleDeleteCriteria({
          minAmount: "",
          maxAmount,
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategory),
        });
        setMinAmount("");
        break;
      case "maxAmount":
        handleDeleteCriteria({
          minAmount,
          maxAmount: "",
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategory),
        });
        setMaxAmount("");
        break;
      case "startDate":
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate: "",
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategory),
        });
        setStartDate("");
        break;
      case "endDate":
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate: "",
          selectedCategory: getCategoryToDelete(selectedCategory),
        });
        setEndDate("");
        break;
      case "selectedCategory":
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(getSelectedCategory()),
        });
        setSelectedCategory(getSelectedCategory());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="transaction-section__title">
        <h3>{`Twoje transakcje`}</h3>
      </div>
      <div className="transaction-section__filterButton">
        <FilterButton
          onClick={toogleFilterButton}
          className={
            filterSectionState.isFormActive
              ? `transaction-section__button-filter--disactive`
              : `transaction-section__button-filter ${
                  isDarkTheme && `transaction-section__button-filter--dark`
                }`
          }
        />
        <CloseFilterButton
          onClick={toogleFilterButton}
          className={
            filterSectionState.isFormActive
              ? `transaction-section__button-filter ${
                  isDarkTheme && `transaction-section__button-filter--dark`
                }`
              : `transaction-section__button-filter--disactive`
          }
        />
      </div>
      {filterSectionState.isFormActive && (
        <section className="inputs-filter">
          <Input
            type="number"
            placeholder="Kwota minimalna"
            value={minAmount}
            onChange={setMinAmount}
            className="filter"
          />
          <Input
            type="number"
            placeholder="Kwota maksymalna"
            value={maxAmount}
            onChange={setMaxAmount}
            className="filter"
          />
          <label className="inputs-filter__labelDate">Okres od:</label>
          <Input
            type="date"
            max={today}
            value={startDate}
            onChange={setStartDate}
            className="filter"
          />
          <label className="inputs-filter__labelDate">Okres do:</label>
          <Input
            type="date"
            max={today}
            value={endDate}
            onChange={setEndDate}
            className="filter"
          />
          <CheckboxCategoryInput
            value={selectedCategory}
            onChange={changeCheckboxInput}
            type={type}
            className="inputs-filter__label"
          />
          <button
            onClick={() => handleFilterButton(objectToFilter)}
            className="button-options"
          >{`Filtruj ${title}`}</button>
        </section>
      )}
      <ActiveFilterCriteria
        type={type}
        criteria={criteria}
        onFilter={deleteFilterCriteria}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
}
