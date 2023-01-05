import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/Home/HomePage";
import IncomePage from "./pages/Income/IncomePage";
import ExpensePage from "./pages/Expense/ExpenePage";
import SelectAddTypePage from "./pages/Add/SelectAddTypePage";
import AddPage from "./pages/Add/AddPage";
import DetailsPage from "./pages/Details/DetailsPage";
import EditPage from "./pages/Edit/EditPage";
import FilterPage from "./pages/Filter/FilterPage";
import "./styles/main.scss";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const themeDark = theme === "dark";
  return (
    //tu będzie zmienna z stanu (dark albo light albo tylko DARK)
    <body className={themeDark && `body-dark`}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dochody" element={<IncomePage />} />
          <Route path="/wydatki" element={<ExpensePage />} />
          <Route path="/transakcje/:id" element={<DetailsPage />} />
          {/* to nie będzie działać nie ze strony głównej - jak w rm.pl, do poprawy */}
          <Route path="/dodaj-transakcje" element={<SelectAddTypePage />} />
          <Route path="/dodaj-dochód" element={<AddPage type="income" name="dochód"/>} />
          <Route path="/dodaj-wydatek" element={<AddPage type="expense" name="wydatek"/>} />
          <Route path="/edytuj-transakcje/:id" element={<EditPage />} />
          <Route
            path="/filtruj-transakcje"
            element={<FilterPage type="all" title="transakcje" />}
          />
          <Route path="/filtruj-dochody" element={<FilterPage type="income" title="dochody" />} />
          <Route path="/filtruj-wydatki" element={<FilterPage type="expense" title="wydatki" />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;
