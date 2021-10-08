import React, {useState} from 'react';
import {Button, Form, Header, Segment} from "semantic-ui-react";
import cuid from "cuid";
import user from '../../../assets/user.png'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from 'react-router-dom'
import {createEvent, updateEvent} from "../eventActions";
import {Formik} from "formik";

const EventForm = () => {
    const {id} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    const selectedEvent = useSelector(state => state.event.events.find(evt => evt.id === id))

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
        selectedEvent ? dispatch(updateEvent(selectedEvent)):
        dispatch(createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: user}))
        history.push('/events')


    }

    return (
       <Segment clearing>
           <Header content={selectedEvent ? 'Edit the event':'Create new event'}/>
           <Formik
               onSubmit={values => console.log(values)}
               initialValues={initialValue}>
               {({values, handleChange, handleSubmit}) => (
                   <Form onSubmit={handleSubmit}>
                       <Form.Field>
                           <input
                               type="text"
                               placeholder={'Event title'}
                               name="title"
                               value={values.title}
                               onChange={handleChange}/>
                       </Form.Field>
                       <Form.Field>
                           <input
                               type="text"
                               placeholder={'Category'}
                               name="category"
                               value={values.category}
                               onChange={handleChange}/>


                       </Form.Field>
                       <Form.Field>
                           <input
                               type="text"
                               placeholder={'Description'}
                               name="description"
                               value={values.description}
                               onChange={handleChange}/>


                       </Form.Field>
                       <Form.Field>
                           <input
                               type="text"
                               placeholder={'City'}
                               name="city"
                               value={values.city}
                               onChange={handleChange}/>


                       </Form.Field>
                       <Form.Field>
                           <input
                               type="text"
                               placeholder={'Venue'}
                               name="venue"
                               value={values.venue}
                               onChange={handleChange}/>


                       </Form.Field>
                       <Form.Field>
                           <input
                               type="date"
                               placeholder={'Date'}
                               name="date"
                               value={values.date}
                               onChange={handleChange}/>


                       </Form.Field>
                       <Button type="submit" floated={'right'} positive content={'Submit'}/>
                       <Button as={Link} to={'/events'} type="submit" floated={'left'} content={'Cancel'}/>
                   </Form>
               )}

           </Formik>
       </Segment>
    );
};

export default EventForm;
