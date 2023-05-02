import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  updateHomeURL,
  updateExpenseURL,
  updateIncomeURL,
} from "../../redux/urlSlice";
import { formatDate } from "../../helpers/formatDate";
import { createFilterUrl } from "../../helpers/createFilterUrl";
import { Params } from "../../helpers/globalTypes";
import { ROOT, EXPENSE } from "../../navigation/CONSTANTS";

export function useFilterSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState("");

  const getSelectedCategory = () => {
    if (location.pathname === ROOT) {
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
    if (location.pathname === EXPENSE) {
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

  const getCategoryToDelete = (selectedCategory: string[]) => {
    let allCategories = getSelectedCategory();

    for (let i = 0; i < selectedCategory.length; i++) {
      allCategories = allCategories.filter(
        (element) => element !== selectedCategory[i]
      );
    }

    return [...allCategories];
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

  const changeCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategory((selectedCategory) => [...selectedCategory, value]);
    } else {
      setSelectedCategory((selectedCategory) =>
        selectedCategory.filter((category) => category !== value)
      );
    }
  };

  const chooseReducerByPathname = (newUrl: string) => {
    return location.pathname === ROOT
      ? updateHomeURL(newUrl)
      : location.pathname === EXPENSE
      ? updateExpenseURL(newUrl)
      : updateIncomeURL(newUrl);
  };

  const handleFilterButton = (params: Params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    dispatch(chooseReducerByPathname(newUrl));
    navigate(newUrl);
  };

  const handleDeleteCriteria = (params: Params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    dispatch(chooseReducerByPathname(newUrl));
    navigate(newUrl);
  };

  const deleteFilterCriteria = (criteriaToDelete: string) => {
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
