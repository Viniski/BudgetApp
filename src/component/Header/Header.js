import React from "react";
import Clock from "./Clock/Clock";

import styles from '../Header/Header.module.css';

function Header(){
        return (
        <header className={styles.header}>
            <Clock/>
            <p> Time is money</p>
        </header>
    )
}

export default Header;