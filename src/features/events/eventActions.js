import {CREATE_EVENT, DELETE_EVENT, FETCH_EVENTS, UPDATE_EVENT} from "./eventConstans";
import {asyncActionError, asyncActionFinish, asyncActionStart} from "../../app/async/asyncReducer";
import {fetchSampleData} from "../../app/api/mockApi";
import {toast} from "react-toastify";

export const createEvent = (event)=> {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}
export const updateEvent = (event)=> {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}
export const deleteEvent = (eventId)=> {
    return {
        type: DELETE_EVENT,
        payload: eventId
    }
}
export const loadEvents = () => async (dispatch) => {
    dispatch(asyncActionStart())
   try {
       const events = await fetchSampleData()
       dispatch({
           type: FETCH_EVENTS,
           payload: events
       })
       dispatch(asyncActionFinish())
   }catch (e) {
       dispatch(asyncActionError(e))
       toast.error(e)
   }
}
export const listenToEvents = (events) => {
    return {
        type: FETCH_EVENTS,
        payload: events
    }
}