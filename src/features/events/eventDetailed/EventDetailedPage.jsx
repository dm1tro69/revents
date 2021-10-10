import React from 'react';
import {Grid} from "semantic-ui-react";
import {useParams} from 'react-router-dom'
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import {useDispatch, useSelector} from "react-redux";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import {listenToEventsFromFirestore} from "../../../app/firestore/firestoreService";
import {listenToEvents} from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const EventDetailedPage = ({match}) => {
    const {id} = useParams()

    const dispatch = useDispatch()

    const event = useSelector(state => state.event.events.find(evt => evt.id === id))
    const {loading} = useSelector(state => state.async)

    useFirestoreDoc({
        query: () => listenToEventsFromFirestore(id),
        data: (event) => dispatch(listenToEvents([event])),
        deps: [id, dispatch]
    })

    if (loading || !event){
        return <LoadingComponent content={'loading event...'}/>
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event}/>
                <EventDetailedInfo event={event}/>
                <EventDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event?.attendees}/>
            </Grid.Column>
        </Grid>
    );
};

export default EventDetailedPage;
