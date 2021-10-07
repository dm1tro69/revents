import React from 'react';
import {Item, Segment} from "semantic-ui-react";
import user from '../../../assets/user.png'

const EventDetailedSidebar = ({attendees}) => {
    console.log(attendees)
    return (
        <>
            <Segment
                textAlign="center"
                style={{border: 'none'}}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                {attendees.length} {attendees.length > 1 ? 'People': 'Person'} Going
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>
                    {attendees.map((att)=> (
                        <Item key={att.id} style={{position: 'relative'}}>
                            <Item.Image size="tiny" src={att.photoURL || user}/>
                            <Item.Content verticalAlign="middle">
                                <Item.Header as="h3">
                                    <span>{att.displayName}</span>
                                </Item.Header>
                            </Item.Content>
                        </Item>
                    ))}


                </Item.Group>
            </Segment>
        </>
    );
};

export default EventDetailedSidebar;
