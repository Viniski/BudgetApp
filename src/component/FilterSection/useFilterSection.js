import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../redux/urlSlice";
import { formatDate } from "../../helpers/formatDate";
import { createFilterUrl } from "../../helpers/createFilterUrl";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function useFilterSection() {
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

  return {
    minAmount,
    setMinAmount,
    maxAmount,
    setMaxAmount,
    today,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedCategory,
    changeCheckboxInput,
    handleFilterButton,
    filterSectionState,
    toogleFilterButton,
    objectToFilter,
    deleteFilterCriteria,
  };
}
