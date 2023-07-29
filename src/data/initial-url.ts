interface InitialUrl {
  homeLink: string;
  expenseLink: string;
  incomeLink: string;
}

export const initialState: InitialUrl = {
  homeLink: '/',
  expenseLink: '/wydatki',
  incomeLink: '/przychody',
};
