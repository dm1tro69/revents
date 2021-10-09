
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import './styles.css';
import {Container} from "semantic-ui-react";
import {Route, useLocation} from "react-router-dom";
// import {useState} from "react";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";

function App() {
    // const [formOpen, SetFormOpen] = useState(false)
    // const [selectedEvent, setSelectedEvent] = useState(null)

    const {key} = useLocation()


    // const handleCreateFormOpen = () => {
    //     setSelectedEvent(null)
    //     SetFormOpen(true)
    // }

  return (
    <>
        <ModalManager/>
        <Route exact path={'/'}>
            <HomePage/>
        </Route>
        <Route exact path={'/sandbox'}>
            <Sandbox/>
        </Route>
        <Route path={'/(.+)'} render={()=> (
            <>
                <NavBar />
                <Container className={'main'}>


                    <Route exact path='/events' component={EventDashboard} />
                    <Route path='/events/:id' component={EventDetailedPage} />
                    <Route  path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>
                </Container>
            </>
        )}/>


    </>
  );
}

export default App;
