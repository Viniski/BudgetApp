import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './component/Header/Header';
import Nav from './component/Nav/Nav';
import Page from './component/Page/Page';

function App() {
  return (
    <div className="background">
      <Router>
        <Header/>
        <Nav/>
        <Page/>
      </Router>
    </div>
  );
}

export default App;
