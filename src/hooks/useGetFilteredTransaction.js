// const getCategoryToDelete = (selectedCategory) => {
//   //i don't need it, because I have category to delete now
//   let arrayCategories = [
//     "Dochód stały",
//     "Dochód dodatkowy",
//     "Koszty stałe",
//     "Jedzenie",
//     "Transport",
//     "Rozrywka",
//     "Inne",
//   ];

//   for (let i = 0; i < selectedCategory.length; i++) {
//     arrayCategories = arrayCategories.filter(
//       (element) => element !== selectedCategory[i]
//     );
//   }

//   return [...arrayCategories];
//};

export const useGetFilteredTransaction = (newTransactions, parameters) => {
  const minAmount = parameters.minAmount;
  const maxAmount = parameters.maxAmount;
  const endDate = parameters.endDate;
  const startDate = parameters.startDate;
  const selectedCategory = parameters.selectedCategory;
  console.log(
    "start",
    newTransactions,
    minAmount,
    maxAmount,
    endDate,
    startDate,
    selectedCategory
  );

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
        (element) => element.category !== selectedCategory[i]
      );
    }
  }

  console.log("end", newTransactions);
  return newTransactions;
};
