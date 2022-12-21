import React, { useState } from 'react';

function AddEvent(props){

    const todayDate = () => new Date().toISOString().slice(0, 10);

    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(todayDate())

    function handleAmount(e){
        setAmount(
            e.target.value
        )
    }

    function handleDescription(e){
        setDescription(
            e.target.value
        )
    }

    function handleDate(e){
        setDate(
            e.target.value
        )
    }

    function handleInCome(){
        const add = props.add(amount, description, date, "income");
        if(add){
        setAmount('')
        setDescription('')
        setDate(todayDate())
        }
        else {
            alert("uzupełnij prawidłowo formularz")
        }
    }

    function handleExpense(){
        const add = props.add(amount, description, date, "expense");
        if(add){
        setAmount('')
        setDescription('')
        setDate(todayDate())
        }
        else {
            alert("uzupełnij prawidłowo formularz")
        }
    }

    //toISOString
    return (
        <div>
            <div>Formularz</div><br />
            <input type="number" value={amount} min="0" onChange={handleAmount}/>
            <label htmlFor="number">Ilość</label>  
            {/* czy to htmlFor ma być opisywane type?  */}
            <input type="text" value={description} onChange={handleDescription}/>
            <label htmlFor="text">Cel</label>
            <input type="date" value={date} onChange={handleDate} min="2022-02-01"/>
            <label htmlFor="date">Kiedy</label>
            <button onClick={handleInCome}>Przychód</button>
            <button onClick={handleExpense}>Wydatek</button>
        </div>
    )
}

export default AddEvent; 