import React from "react";

function InfoExpense(props){
    return(
        <p>Od 1 lutego 2022 roku twóje wydatki wyniosły: {props.expense} zł</p>
    )
}

export default InfoExpense;
