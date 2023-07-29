import { Route, Routes } from 'react-router-dom';
import { AddPage } from '@/pages/add/add-page';
import { SelectAddTypePage } from '@/pages/add/select-add-type-page';
import { DetailsPage } from '@/pages/details/details-page';
import { EditPage } from '@/pages/edit/edit-page';
import { ExpensePage } from '@/pages/expense/expene-page';
import { HomePage } from '@/pages/home/home-page';
import { IncomePage } from '@/pages/income/income-page';
import { NotFound } from '@/pages/not-found/not-found';
import {
  ADD_EXPENSE,
  ADD_INCOME,
  ADD_TRANSACTION,
  ALL_PATH,
  EDIT_TRANSACTION,
  EXPENSE,
  INCOME,
  ROOT,
  TRANSACTION,
} from './constants';

export const RouterConfig = () => (
  <Routes>
    <Route element={<HomePage />} path={ROOT} />
    <Route element={<IncomePage />} path={INCOME} />
    <Route element={<ExpensePage />} path={EXPENSE} />
    <Route element={<DetailsPage />} path={TRANSACTION} />
    <Route element={<SelectAddTypePage />} path={ADD_TRANSACTION} />
    <Route element={<AddPage name="przychód" type="income" />} path={ADD_INCOME} />
    <Route element={<AddPage name="wydatek" type="expense" />} path={ADD_EXPENSE} />
    <Route element={<EditPage />} path={EDIT_TRANSACTION} />
    <Route element={<NotFound />} path={ALL_PATH} />
  </Routes>
);
