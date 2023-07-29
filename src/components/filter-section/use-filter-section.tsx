import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createFilterUrl } from '@/helpers/create-filter-url';
import { formatDate } from '@/helpers/format-date';
import { Params } from '@/helpers/global-types';
import { EXPENSE, ROOT } from '@/navigation/constants-dupa';
import { useUrlStore } from '@/store/url';

export const useFilterSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const updateHomeURL = useUrlStore((state) => state.updateHomeURL);
  const updateIncomeURL = useUrlStore((state) => state.updateIncomeURL);
  const updateExpenseURL = useUrlStore((state) => state.updateExpenseURL);
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const today = formatDate(new Date());
  const [endDate, setEndDate] = useState('');

  const getSelectedCategoryInitialState = () => {
    if (location.pathname === ROOT) {
      return ['Dochód stały', 'Dochód dodatkowy', 'Koszty stałe', 'Jedzenie', 'Transport', 'Rozrywka', 'Inne'];
    }
    if (location.pathname === EXPENSE) {
      return ['Koszty stałe', 'Jedzenie', 'Transport', 'Rozrywka', 'Inne'];
    }

    return ['Dochód stały', 'Dochód dodatkowy', 'Inne'];
  };

  const [selectedCategoryState, setSelectedCategoryState] = useState(getSelectedCategoryInitialState());

  const [filterSectionState, setFilterSectionState] = useState({
    isFormActive: false,
    activeCriteria: {
      minAmount,
      maxAmount,
      startDate,
      endDate,
      selectedCategory: selectedCategoryState,
    },
  });

  const getCategoryToDelete = (selectedCategoryToDelete: string[]) => {
    let allCategories = getSelectedCategoryInitialState();

    for (let i = 0; i < selectedCategoryToDelete.length; i += 1) {
      allCategories = allCategories.filter((element) => element !== selectedCategoryToDelete[i]);
    }

    return [...allCategories];
  };

  const objectToFilter = {
    minAmount,
    maxAmount,
    startDate,
    endDate,
    selectedCategory: getCategoryToDelete(selectedCategoryState),
  };

  const toogleFilterButton = () => {
    setFilterSectionState({
      ...filterSectionState,
      isFormActive: !filterSectionState.isFormActive,
    });
  };

  const changeCheckboxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategoryState((selectedCategory) => [...selectedCategory, value]);
    } else {
      setSelectedCategoryState((selectedCategory) => selectedCategory.filter((category) => category !== value));
    }
  };

  const chooseReducerByPathname = (newUrl: string) => {
    if (location.pathname === ROOT) {
      updateHomeURL(newUrl);
    } else if (location.pathname === EXPENSE) {
      updateExpenseURL(newUrl);
    } else {
      updateIncomeURL(newUrl);
    }
  };

  const handleFilterButton = (params: Params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    chooseReducerByPathname(newUrl);
    navigate(newUrl);
  };

  const handleDeleteCriteria = (params: Params) => {
    const newUrl = createFilterUrl(location.pathname, params);
    setFilterSectionState({ activeCriteria: params, isFormActive: false });
    chooseReducerByPathname(newUrl);
    navigate(newUrl);
  };

  const deleteFilterCriteria = (criteriaToDelete: string) => {
    switch (criteriaToDelete) {
      case 'minAmount':
        handleDeleteCriteria({
          minAmount: '',
          maxAmount,
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategoryState),
        });
        setMinAmount('');
        break;
      case 'maxAmount':
        handleDeleteCriteria({
          minAmount,
          maxAmount: '',
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategoryState),
        });
        setMaxAmount('');
        break;
      case 'startDate':
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate: '',
          endDate,
          selectedCategory: getCategoryToDelete(selectedCategoryState),
        });
        setStartDate('');
        break;
      case 'endDate':
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate: '',
          selectedCategory: getCategoryToDelete(selectedCategoryState),
        });
        setEndDate('');
        break;
      case 'selectedCategory':
        handleDeleteCriteria({
          minAmount,
          maxAmount,
          startDate,
          endDate,
          selectedCategory: getCategoryToDelete(getSelectedCategoryInitialState()),
        });
        setSelectedCategoryState(getSelectedCategoryInitialState());
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
    selectedCategory: selectedCategoryState,
    changeCheckboxInput,
    handleFilterButton,
    filterSectionState,
    toogleFilterButton,
    objectToFilter,
    deleteFilterCriteria,
  };
};
