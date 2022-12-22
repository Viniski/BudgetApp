import "./styles/main.scss"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import IncomePage from "./pages/Income/IncomePage";
import ExpensePage from "./pages/Expense/ExpenePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dochody" element={<IncomePage />} />
          <Route path="/wydatki" element={<ExpensePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
