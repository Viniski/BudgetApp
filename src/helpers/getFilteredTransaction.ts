import { log } from "console";
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
  initTransactions: initialStateType,
  parameters: Params
) => {
  const { minAmount, maxAmount, endDate, startDate, selectedCategory } =
    parameters;

  let newTransactions = [...initTransactions];

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
      newTransactions = newTransactions.filter((element) => {
        return element.category !== selectedCategory[i];
      });
    }
  }

  return newTransactions;
};
