import React from 'react';
import {Button, Header, Segment} from "semantic-ui-react";
import cuid from "cuid";
import user from '../../../assets/user.png'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory} from 'react-router-dom'
import {createEvent, updateEvent} from "../eventActions";
import {Formik, Form} from "formik";
import * as Yup from 'yup'
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import {categoryData} from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";

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


    const validationSchema = Yup.object({
        title: Yup.string().required('You must enter a title'),
        category: Yup.string().required('You must enter a category'),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),

    })

    return (
       <Segment clearing>

           <Formik
               validationSchema={validationSchema}
               onSubmit={values => {
                   selectedEvent ? dispatch(updateEvent(selectedEvent)):
                       dispatch(createEvent({...values, id: cuid(), hostedBy: 'Bob', attendees: [], hostPhotoURL: user}))
                   history.push('/events')}
               }
               initialValues={initialValue}>
               {({isSubmitting, dirty, isValid}) => (
                   <Form className={'ui form'}>
                       <Header sub color={'teal'} content={'Event Details'}/>
                       <MyTextInput name="title" placeholder={'Event title'}/>
                       <MySelectInput name="category" placeholder={'Category'} options={categoryData}/>
                       <MyTextArea name="description" placeholder={'Description'} rows={3}/>
                       <Header sub color={'teal'} content={'Event Location Details'}/>
                       <MyTextInput name="city" placeholder={'City'}/>
                       <MyTextInput name="venue" placeholder={'Venue'}/>
                       <MyDateInput
                           name="date"
                           placeholderText={'Date'}
                           timeFormat={'HH:mm'}
                           showTimeSelect
                           timeCaption={'time'}
                           dateFormat={'MMMM d, yyyy h:mm a'}
                       />

                       <Button
                           loading={isSubmitting}
                           disabled={!isValid || !dirty || isSubmitting}
                           type="submit"
                           floated={'right'}
                           positive
                           content={'Submit'}/>
                       <Button
                           disabled={isSubmitting}
                           as={Link}
                           to={'/events'}
                           type="submit"
                           floated={'left'}
                           content={'Cancel'}/>
                   </Form>
               )}

           </Formik>
       </Segment>
    );
};

export default EventForm;
