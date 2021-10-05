import React from 'react';
import EventListItem from "./EventListItem";

const EventList = ({events, handleSelectEvent, handleDeleteEvent}) => {
    return (
       <>
           {events.map((event) => (
               <EventListItem key={event.id} event={event} handleSelectEvent={handleSelectEvent} handleDeleteEvent={handleDeleteEvent}/>
           ))}
       </>
    );
};

export default EventList;
