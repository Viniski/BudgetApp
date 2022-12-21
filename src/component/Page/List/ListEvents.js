import React from "react";

import Event from "./Item/Event";

function ListEvents(props){
        const events = props.listState.map(event => <Event 
        key={event.id} 
        id={event.id} 
        value={event.value} 
        description={event.description} 
        date={event.date}
        edit={props.edit}
        remove={props.remove}
        />);
    return (
    <>
    <h2>lista:</h2>
    <ul>
        {events}
    </ul>
    </>
    );
}

export default ListEvents;