import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { IncomePage } from "../pages/Income/IncomePage";
import { ExpensePage } from "../pages/Expense/ExpenePage";
import { SelectAddTypePage } from "../pages/Add/SelectAddTypePage";
import { AddPage } from "../pages/Add/AddPage";
import { DetailsPage } from "../pages/Details/DetailsPage";
import { EditPage } from "../pages/Edit/EditPage";
import { NotFound } from "../pages/NotFound/NotFound";
import {
  ROOT,
  INCOME,
  EXPENSE,
  TRANSACTION,
  ADD_TRANSACTION,
  ADD_INCOME,
  ADD_EXPENSE,
  EDIT_TRANSACTION,
  ALL_PATH,
} from "./CONSTANTS";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<HomePage />} />
      <Route path={INCOME} element={<IncomePage />} />
      <Route path={EXPENSE} element={<ExpensePage />} />
      <Route path={TRANSACTION} element={<DetailsPage />} />
      <Route path={ADD_TRANSACTION} element={<SelectAddTypePage />} />
      <Route
        path={ADD_INCOME}
        element={<AddPage type="income" name="dochód" />}
      />
      <Route
        path={ADD_EXPENSE}
        element={<AddPage type="expense" name="wydatek" />}
      />
      <Route path={EDIT_TRANSACTION} element={<EditPage />} />
      <Route path={ALL_PATH} element={<NotFound />} />
    </Routes>
  );
};
