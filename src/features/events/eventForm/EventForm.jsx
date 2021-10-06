import React, {useState} from 'react';
import {Button, Form, Header, Segment} from "semantic-ui-react";
import cuid from "cuid";
import user from '../../../assets/user.png'
import {Link} from "react-router-dom";

const EventForm = ({SetFormOpen, setEvents, handleCreateEvent, selectedEvent, handleUpdateEvent}) => {
    const initialValue = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }
    const [values, setValues] = useState(initialValue)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    const handlerFormSubmit = (e) => {
        e.preventDefault()
        selectedEvent ? handleUpdateEvent({...selectedEvent, ...values}):
        handleCreateEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: user})
        SetFormOpen(false)

    }

    return (
       <Segment clearing>
           <Header content={selectedEvent ? 'Edit the event':'Create new event'}/>
           <Form onSubmit={handlerFormSubmit}>
               <Form.Field>
                   <input
                       type="text"
                       placeholder={'Event title'}
                       name="title"
                       value={values.title}
                       onChange={(e)=>handleInputChange(e)}/>
               </Form.Field>
               <Form.Field>
                   <input
                       type="text"
                       placeholder={'Category'}
                       name="category"
                       value={values.category}
                       onChange={(e)=>handleInputChange(e)}/>


               </Form.Field>
               <Form.Field>
                   <input
                       type="text"
                       placeholder={'Description'}
                       name="description"
                       value={values.description}
                       onChange={(e)=>handleInputChange(e)}/>


               </Form.Field>
               <Form.Field>
                   <input
                       type="text"
                       placeholder={'City'}
                       name="city"
                       value={values.city}
                       onChange={(e)=>handleInputChange(e)}/>


               </Form.Field>
               <Form.Field>
                   <input
                       type="text"
                       placeholder={'Venue'}
                       name="venue"
                       value={values.venue}
                       onChange={(e)=>handleInputChange(e)}/>


               </Form.Field>
               <Form.Field>
                   <input
                       type="date"
                       placeholder={'Date'}
                       name="date"
                       value={values.date}
                       onChange={(e)=>handleInputChange(e)}/>


               </Form.Field>
               <Button type="submit" floated={'right'} positive content={'Submit'}/>
               <Button as={Link} to={'/events'} type="submit" floated={'left'} content={'Cancel'}/>
           </Form>
       </Segment>
    );
};

export default EventForm;
