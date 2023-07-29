import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialState } from '@/data/initial-transaction';
import type { InitialTransactionElement, InitialTransactions } from '@/data/initial-transaction';

interface TransactionState {
  initialState: InitialTransactions;
  add: (transaction: InitialTransactionElement) => void;
  edit: (transaction: InitialTransactionElement) => void;
  remove: (id: number) => void;
}

export const useTransactionStore = create<TransactionState>()(
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
          (element: InitialTransactionElement) => element.id !== transaction.id,
        );
        set(() => ({
          initialState: [...newState, transaction],
        }));
      },
      remove: (id) => {
        set((state) => ({
          initialState: state.initialState.filter((element: InitialTransactionElement) => element.id !== id),
        }));
      },
    }),
    {
      name: 'url-storage',
    },
  ),
);
