import React from 'react';
import {Image, List} from "semantic-ui-react";
import user from '../../../assets/user.png'

const EventListAttendee = () => {
    return (
        <List.Item>
            <Image size={'mini'} circular src={user}/>
        </List.Item>
    );
};

export default EventListAttendee;
