import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UrlState {
  homeLink: string;
  expenseLink: string;
  incomeLink: string;
  updateHomeURL: (link: string) => void;
  updateExpenseURL: (link: string) => void;
  updateIncomeURL: (link: string) => void;
}

export const useUrlStore = create<UrlState>()(
  persist(
    (set) => ({
      homeLink: '/',
      expenseLink: '/wydatki',
      incomeLink: '/przychody',
      updateHomeURL: (link) => set(() => ({ homeLink: link })),
      updateExpenseURL: (link) => set(() => ({ expenseLink: link })),
      updateIncomeURL: (link) => set(() => ({ incomeLink: link })),
    }),
    {
      name: 'url-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
