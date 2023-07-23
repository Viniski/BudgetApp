import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface urlState {
  homeLink: string;
  expenseLink: string;
  incomeLink: string;
  updateHomeURL: (link: string) => void;
  updateExpenseURL: (link: string) => void;
  updateIncomeURL: (link: string) => void;
}

export const useUrlStore = create<urlState>()(
  persist(
    (set) => ({
      homeLink: "/",
      expenseLink: "/wydatki",
      incomeLink: "/przychody",
      updateHomeURL: (link) => set(() => ({ homeLink: link })),
      updateExpenseURL: (link) => set(() => ({ expenseLink: link })),
      updateIncomeURL: (link) => set(() => ({ incomeLink: link })),
    }),
    {
      name: "url-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
