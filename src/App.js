import "./styles/main.scss"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import IncomePage from "./pages/Income/IncomePage";
import ExpensePage from "./pages/Expense/ExpenePage";
import AddPage from "./pages/Add/AddPage";
import DetailsPage from "./pages/Details/DetailsPage";
import EditPage from "./pages/Edit/EditPage";
import FilterPage from "./pages/Filter/FilterPage";

function App() {
  return (
    //tu będzie zmienna z stanu (dark albo light albo tylko DARK)
    <body className="body-dark">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dochody" element={<IncomePage />} />
          <Route path="/wydatki" element={<ExpensePage />} />
          <Route path="/transakcje/:id" element={<DetailsPage />} />
          {/* to nie będzie działać nie ze strony głównej - jak w rm.pl, do poprawy */}
          <Route path="/dodaj-transakcje" element={<AddPage />} />
          <Route path="/edytuj-transakcje/:id" element={<EditPage />} />
          <Route path="/filtruj-transakcje" element={<FilterPage />} />
          <Route path="/filtruj-dochody" element={<FilterPage />} />
          <Route path="/filtruj-wydatki" element={<FilterPage />} />
        </Routes>
      </Router>
    </body>
  );
}

export default App;