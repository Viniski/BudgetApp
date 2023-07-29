import { create } from "zustand";
import { persist } from "zustand/middleware";
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
        const newState = state.initialState.filter(
          (element: initialTransactionElement) => element.id !== transaction.id
        );
        set(() => ({
          initialState: [...newState, transaction],
        }));
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
    }
  )
);
