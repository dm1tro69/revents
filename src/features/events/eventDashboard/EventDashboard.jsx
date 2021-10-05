import React, {useState} from 'react';
import {Grid} from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import {sampleData} from "../../../app/api/sampleData";

const EventDashboard = ({formOpen, SetFormOpen, handleSelectEvent, selectedEvent}) => {
    const [events, setEvents] = useState(sampleData)


    const handleCreateEvent = (event) => {
        setEvents([...events, event])
    }
    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map((evt)=> (
            evt.id === updatedEvent.id ? updatedEvent : evt
        )))
        handleSelectEvent(null)
    }
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter((evt)=> evt.id !== eventId))
    }


    return (
       <Grid>
           <Grid.Column width={10}>
               <EventList events={events} handleSelectEvent={handleSelectEvent} handleDeleteEvent={handleDeleteEvent}/>
           </Grid.Column>
           <Grid.Column width={6}>
               {formOpen && <EventForm
                   SetFormOpen={SetFormOpen}
                   setEvents={setEvents}
                   selectedEvent={selectedEvent}
                   key={selectedEvent ? selectedEvent.id: null}
                   handleUpdateEvent={handleUpdateEvent}
                   handleCreateEvent={handleCreateEvent}/>}

           </Grid.Column>
       </Grid>
    );
};

export default EventDashboard;
