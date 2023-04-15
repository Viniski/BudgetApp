export const ROOT = `/`;
export const INCOME = `/przychody`;
export const EXPENSE = `/wydatki`;
export const CHARTS = "/wykresy";
export const TRANSACTION = `/transakcje/:id`;
export const TRANSACTION_ID = (id: number) => `/transakcje/${id}`;
export const ADD_TRANSACTION = `/dodaj-transakcje`;
export const ADD_INCOME = `/dodaj-przychód`;
export const ADD_EXPENSE = `/dodaj-wydatek`;
export const EDIT_TRANSACTION = `/edytuj-transakcje/:id`;
export const EDIT_TRANSACTION_ID = (id: number) => `/edytuj-transakcje/${id}`;
export const ALL_PATH = `*`;
