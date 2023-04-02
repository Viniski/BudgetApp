import type { initialStateType } from "../data/initialTransaction";

type Params = {
  page: string | number;
  minAmount: string | null;
  maxAmount: string | null;
  endDate: string | null;
  startDate: string | null;
  selectedCategory: string[];
};

export const getFilteredTransaction = (
  newTransactions: initialStateType,
  parameters: Params
) => {
  const { minAmount } = parameters;
  const { maxAmount } = parameters;
  const { endDate } = parameters;
  const { startDate } = parameters;
  const { selectedCategory } = parameters;

  if (minAmount) {
    newTransactions = newTransactions.filter(
      (el) => Number(el.amount) >= Number(minAmount)
    );
  }

  if (maxAmount) {
    newTransactions = newTransactions.filter(
      (el) => Number(el.amount) <= Number(maxAmount)
    );
  }

  if (endDate) {
    newTransactions = newTransactions.filter(
      (el) => new Date(el.date) <= new Date(endDate)
    );
  }

  if (startDate) {
    newTransactions = newTransactions.filter(
      (el) => new Date(el.date) >= new Date(startDate)
    );
  }

  if (selectedCategory.length > 0) {
    for (let i = 0; i < selectedCategory.length; i++) {
      newTransactions = newTransactions.filter(
        (element, i: number) => element.category !== selectedCategory[i]
      );
    }
  }

  return newTransactions;
};
