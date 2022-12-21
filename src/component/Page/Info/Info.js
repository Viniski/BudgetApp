import React from "react";
import {Routes, Route} from 'react-router-dom'
import InfoBudget from "./InfoBudget";
import InfoExpense from "./InfoExpense";
import InfoIncome from "./InfoIncome";

function Info(props){
    let date = props.stateDate;
    let expense = 0;
    let income = 0;
    
    console.log(date); 
      for (let i = 0; i < date.length; i++){
          if (date[i].type === "expense"){
            expense += date[i].value;
            //console.log(expense);
          } else if (date[i].type === "income"){
            income += date[i].value;
            //console.log(income);
        }
    }
    // console.log(income);
    // console.log(expense);

    return (
      <>
      <p>o co tu chodzi
      </p>
          <Routes>
            <Route path='/' element={
                <>
                    <InfoBudget budget={Math.floor(income-expense)}></InfoBudget>
                    <InfoExpense expense={expense}></InfoExpense>
                    <InfoIncome income={income}></InfoIncome>
                    <p>dupa</p>
                </>
            }>
            </Route>
            <Route exact path='/dochody' element={
                <>
                    <p>dochody</p>
                    <InfoIncome income={income}></InfoIncome>
                </>
            }></Route>
            <Route path='/budzet' element={
                <>
                    <p>budget</p>
                    <InfoBudget budget={Math.floor(income-expense)}></InfoBudget>
                </>
            }>
            </Route>
            <Route path='/wydatki' element={
                <>
                    <p>wydatki</p>
                    <InfoExpense expense={expense}></InfoExpense>
                </>
            }>
            </Route>
          </Routes>
      </>
    )
}

export default Info;