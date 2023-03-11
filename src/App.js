import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomePage } from "./pages/Home/HomePage";
import { IncomePage } from "./pages/Income/IncomePage";
import { ExpensePage } from "./pages/Expense/ExpenePage";
import { SelectAddTypePage } from "./pages/Add/SelectAddTypePage";
import { AddPage } from "./pages/Add/AddPage";
import { DetailsPage } from "./pages/Details/DetailsPage";
import { EditPage } from "./pages/Edit/EditPage";
import { NotFound } from "./pages/NotFound/NotFound";
import "./styles/main.scss";

export function App() {
  const theme = useSelector((state) => state.theme.theme);
  const isDarkTheme = theme === "dark";

  return (
    <body className={isDarkTheme && `body-dark`}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dochody" element={<IncomePage />} />
          <Route path="/wydatki" element={<ExpensePage />} />
          <Route path="/transakcje/:id" element={<DetailsPage />} />
          <Route path="/dodaj-transakcje" element={<SelectAddTypePage />} />
          <Route
            path="/dodaj-dochód"
            element={<AddPage type="income" name="dochód" />}
          />
          <Route
            path="/dodaj-wydatek"
            element={<AddPage type="expense" name="wydatek" />}
          />
          <Route path="/edytuj-transakcje/:id" element={<EditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </body>
  );
}
