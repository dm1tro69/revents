import React, {useState} from 'react';
import {Grid} from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import {sampleData} from "../../../app/api/sampleData";

const EventDashboard = ({formOpen, SetFormOpen}) => {
    const [events, setEvents] = useState(sampleData)

    const handleCreateEvent = (event) => {
        setEvents([...events, event])
    }

    return (
       <Grid>
           <Grid.Column width={10}>
               <EventList events={events}/>
           </Grid.Column>
           <Grid.Column width={6}>
               {formOpen && <EventForm SetFormOpen={SetFormOpen} setEvents={setEvents} handleCreateEvent={handleCreateEvent}/>}

           </Grid.Column>
       </Grid>
    );
};

export default EventDashboard;
