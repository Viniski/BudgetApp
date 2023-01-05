import { createSlice } from "@reduxjs/toolkit";
//initial state ma być pobierany z localSotrage :O widzę juz błąd bo hook poza komponentem...
//wygląda na to, że na początku będzie pusty a w app go dispatchuje i zaktualizuje :) (może być potrzebny loadingIcon nawet)

const initialState = [
  {
    id: 53252355,
    type: "expense",
    date: "2022-12-13",
    amount: "24",
    title: "Obiad w restauracji",
    category: "food",
    note: "Było całkiem smaczne, wróc tu",
  },
  {
    id: 53252332,
    type: "expense",
    date: "2022-11-27",
    amount: "2300",
    title: "Czynsz + media",
    category: "fixed",
    note: "",
  },
  {
    id: 53252311,
    type: "expense",
    date: "2022-12-04",
    amount: "200",
    title: "Paliwo na orlenie",
    category: "transport",
    note: "Spalanie ostatnio 6.5L/100km",
  },
  {
    id: 53552335,
    type: "income",
    date: "2022-10-11",
    amount: "4000",
    title: "Wypłata",
    category: "income",
    note: "",
  },
  {
    id: 74529154,
    type: "expense",
    date: "2023-01-02",
    amount: "123",
    title: "Mandat MKS",
    category: "other",
    note: "",
  },
  {
    id: 57214398,
    type: "income",
    date: "2022-11-20",
    amount: "350",
    title: "Dodatkowa praca",
    category: "income-extra",
    note: "Zlecenie dla klienta",
  },
];

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    edit(state, action) {
      let index = state.findIndex((tranasaction) => tranasaction.id === action.payload.id);
      state[index] = action.payload;
    },
    remove(state, action) {
      return state.filter(
        (tranasaction) => tranasaction.id !== action.payload.id
      );
    },
  },
});

export const { add, edit, remove } = transactionsSlice.actions;
export default transactionsSlice.reducer;
