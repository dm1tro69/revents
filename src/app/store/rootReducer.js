import {combineReducers} from "redux";
import {eventReducer} from "../../features/events/eventReducer";
import testReducer from "../../features/sandbox/testReducer";
import modalReducer from "../common/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";

const rootReducer = combineReducers({
    event: eventReducer,
    test: testReducer,
    modals: modalReducer,
    auth: authReducer
})
export default rootReducer