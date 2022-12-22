import React from 'react';
import { BrowserRouter as Router, Routes, NavLink, Route} from "react-router-dom"

function Nav(){
    return (
    <nav>
        <ul>
            <li><NavLink to="/">Strona główna</NavLink></li>
            <li><NavLink to="/dochody">Dochody</NavLink></li>
            <li><NavLink to="/budzet">Budżet</NavLink></li>
            <li><NavLink to="/wydatki">Wydatki</NavLink></li>
        </ul>
    </nav>    
    )
}
    
export default Nav;