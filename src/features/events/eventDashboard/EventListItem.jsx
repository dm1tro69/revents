import React from 'react';
import {Button, Icon, Item, List, Segment} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = ({event, handleSelectEvent, handleDeleteEvent}) => {
    return (
       <Segment.Group>
           <Segment>
               <Item.Group>
                   <Item>
                       <Item.Image size={'tiny'} circular src={event.hostPhotoURL}/>
                       <Item.Content>
                           <Item.Header content={event.title}/>
                           <Item.Description>
                               Hosted by {event.hostedBy}
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name={'clock'}/> {event.date}
                   <Icon name={'marker'}/> {event.venue}
               </span>
           </Segment>
           <Segment secondary>
             <List horizontal>

                 {event.attendees.map(att => (
                     <EventListAttendee key={att.id} attr={att}/>
                 ))}
             </List>
           </Segment>
           <Segment clearing>
               <div>{event.description}</div>
               <Button onClick={()=> handleDeleteEvent(event.id)} color={'red'} floated={'left'} content={'Delete'}/>
               <Button onClick={()=> handleSelectEvent(event)} color={'teal'} floated={'right'} content={'View'}/>
           </Segment>
       </Segment.Group>
    );
};

export default EventListItem;
