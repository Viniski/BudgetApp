import "./styles/main.scss"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import IncomePage from "./pages/Income/IncomePage";
import ExpensePage from "./pages/Expense/ExpenePage";
import AddPage from "./pages/Add/AddPage";
import DetailsPage from "./pages/Details/DetailsPage";
import EditPage from "./pages/Edit/EditPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dochody" element={<IncomePage />} />
          <Route path="/wydatki" element={<ExpensePage />} />
          <Route path="/transakcja/:id" element={<DetailsPage />} />
          {/* to nie będzie działać nie ze strony głównej - jak w rm.pl, do poprawy */}
          <Route path="/dodaj-transakcje" element={<AddPage />} />
          <Route path="/edytuj-transakcje/:id" element={<EditPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
