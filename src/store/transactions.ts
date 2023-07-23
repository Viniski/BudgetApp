import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { initialState } from "../data/initialTransaction";
import type { initialTransactions } from "../data/initialTransaction";
import type { initialTransactionElement } from "../data/initialTransaction";

interface transactionState {
  initialState: initialTransactions;
  add: (transaction: initialTransactionElement) => void;
  edit: (transaction: initialTransactionElement) => void;
  remove: (id: number) => void;
}

export const useTransactionStore = create<transactionState>()(
  persist(
    (set, get) => ({
      initialState,
      add: (transaction) =>
        set((state) => ({
          initialState: [...state.initialState, transaction],
        })),
      edit: (transaction) => {
        const state = get();
        let index = state.initialState.findIndex(
          (element) => element.id === transaction.id
        );
        set({
          initialState: [
            ...state.initialState,
            (state.initialState[index] = transaction),
          ],
        });
      },
      remove: (id) => {
        set((state) => ({
          initialState: state.initialState.filter(
            (element: initialTransactionElement) => element.id !== id
          ),
        }));
      },
    }),
    {
      name: "url-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
