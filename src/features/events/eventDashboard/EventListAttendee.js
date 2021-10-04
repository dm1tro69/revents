import React from 'react';
import {Image, List} from "semantic-ui-react";

const EventListAttendee = ({attr}) => {
    return (
        <List.Item>
            <Image size={'mini'} circular src={attr.photoURL}/>
        </List.Item>
    );
};

export default EventListAttendee;
