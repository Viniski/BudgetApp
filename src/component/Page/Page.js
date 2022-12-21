import React, { useEffect, useState} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import {Routes, Route} from "react-router-dom";

import AddEvent from "./Form/AddEvent";
import ListEvents from './List/ListEvents';
import Info from './Info/Info';

function Page(){
    const startingValue = [{
        value: 20.2,
        description: "kwiatki",
        date: "234",
        id: "234",
        type: "income", 
    }, {
        value: 10.2,
        description: "cokolwiek",
        date: "876",
        id: "876",
        type: "income", 
     }, {
        value: 40.5,
        description: "ksiązki",
        date: "435",
        id: "435",
        type: "expense", 
     }]
     const key = "data";
     let defaultValueFromLocalStorage = window.localStorage.getItem(key);
     
     const [event, setEvent] = useState(defaultValueFromLocalStorage ? JSON.parse(defaultValueFromLocalStorage) : []);  //tu wartością domyślną musi być to co w local storage; + trzeba dodać obsługe w przypadku gdy lista pusta na poczatku, w sensie state/event pusty, zeby własnie nie wysskakiwały takie błędy np z lenght :) 
     const [state, setEventToStorage] =  useLocalStorage(key, '');

    function addChangeToLocalStorage(){
        let data = [...event];
        setEventToStorage(data)
    } 

    function editEvent(id){
        console.log(`edit o ${id}`)
    }

    function removeEvent(id){
        let state = [...event];
        state = state.filter(st => st.id !== id);
        setEvent(
            state
        )
    }
//to sortowanie jakby niepotrzebne xd ale fajnie zaimplementowane :) 
    function sortEvent(a, b){
        return b.id - a.id
    }
    
    function addEvent(amount, description, date, type){
        if (amount.length >= 1 && description.length > 1 && amount > 0){
        const newEvent = {
        value: amount*1,
        description: description,
        date: date,
        id: new Date().getTime(), // tu jest żle bo nie sortuje po dacie dodania, tylko po czasie dodania :) 
        type: type, 
        }
        //można by pracować na kopii ja użyje "prevSteta" ale w hook
        setEvent(prevEvent => [...prevEvent, newEvent].sort(sortEvent))
        //setStorage(prevStorage => [...prevStorage, newEvent])
        return true;
        }
        else {
            return false;
        }
    }

    useEffect(() => {
        addChangeToLocalStorage();
      }, [event]);

    return (
        <>
        <Routes>
            <Route path='/' element={
                <>
                    <AddEvent add={addEvent}/>
                    <Info stateDate={event}/>
                </>
            }>
            </Route>
            <Route path='/dochody' element={
                <>
                    <p>dochody</p>
                    <Info stateDate={event}/>
                    <ListEvents listState={event} edit={editEvent} remove={removeEvent}/>
                </>
            }></Route>
            <Route path='/budzet' element={
                <>
                    <p>budget</p>
                    <Info stateDate={event}/>
                    <ListEvents listState={event} edit={editEvent} remove={removeEvent}/>
                </>
            }>
            </Route>
            <Route path='/wydatki' element={
                <>
                    <p>wydatki</p>
                    <Info stateDate={event}/>
                    <ListEvents listState={event} edit={editEvent} remove={removeEvent}/>
                </>
            }>
            </Route>
        </Routes>
        </>
    )
} 

export default Page;