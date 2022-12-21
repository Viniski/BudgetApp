import React from "react";

function Event(props){
    const {value, description, date, id} = props;
    //console.log(props);
    return (
    <>
    <li>{value} - {description} - dnia: {date}</li>
    <button onClick={() => props.edit(id)}>edit</button>
    <button onClick={() => props.remove(id)}>delete</button>
    </>
    )
}

export default Event;