import { createSlice } from "@reduxjs/toolkit";
// initial state ma być pobierany z localSotrage :O
// widzę juz błąd bo hook poza komponentem...
// wygląda na to, że na początku będzie pusty a w app go dispatchuje i zaktualizuje :)
// (może być potrzebny loadingIcon nawet)

const initialState = [{
  type: "expense",
  date: "2022-12-13",
  amount: "24",
  title: "Obiad w restauracji",
  category: "Jedzenie",
  id: 3454319,
  note: "Było całkiem smaczne, wróc tu",
},
{
  type: "expense",
  date: "2022-11-27",
  amount: "2300",
  title: "Czynsz + media",
  category: "Koszty stałe",
  id: 79879,
  note: "",
},
{
  type: "expense",
  date: "2022-12-04",
  amount: "200",
  id: 2415235,
  title: "Paliwo na orlenie",
  category: "Transport",
  note: "Spalanie ostatnio 6.5L/100km",
},
{
  type: "income",
  date: "2022-10-11",
  amount: "4000",
  title: "Wypłata",
  category: "Dochód stały",
  id: 325235,
  note: "",
},
{
  type: "expense",
  date: "2023-01-02",
  amount: "123",
  title: "Mandat MKS",
  category: "Inne",
  id: 532325,
  note: "",
},
{
  type: "income",
  date: "2022-11-20",
  amount: "350",
  title: "Dochód dodatkowy",
  category: "income-extra",
  id: 908532,
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
      let index = state.findIndex(
        (tranasaction) => tranasaction.id === action.payload.id
      );
      state[index] = action.payload;
    },
    remove(state, action) {
      return state.filter((tranasaction) => tranasaction.id !== action.payload);
    },
    update(state, action) {//to mi nie trza - to było do local storage CHYBA
      state = action.payload;
    },
  },
});

export const { add, edit, remove, update } = transactionsSlice.actions;
export default transactionsSlice.reducer;
