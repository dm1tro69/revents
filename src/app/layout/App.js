
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import './styles.css';
import {Container} from "semantic-ui-react";
import {Route} from "react-router-dom";
import {useState} from "react";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
    const [formOpen, SetFormOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleSelectEvent = (event) => {
        setSelectedEvent(event)
        SetFormOpen(true)
    }
    const handleCreateFormOpen = () => {
        setSelectedEvent(null)
        SetFormOpen(true)
    }

  return (
    <>
        <Route exact path={'/'}>
            <HomePage/>
        </Route>
        <Route exact path={'/sandbox'}>
            <Sandbox/>
        </Route>
        <Route path={'/(.+)'} render={()=> (
            <>
                <NavBar SetFormOpen={handleCreateFormOpen} formOpen={formOpen}/>
                <Container className={'main'}>

                    <Route path={'/events/:id'}>
                        <EventDetailedPage/>
                    </Route>
                    <Route exact path={'/events'}>
                        <EventDashboard
                            formOpen={formOpen}
                            SetFormOpen={SetFormOpen}
                            selectedEvent={selectedEvent}
                            handleSelectEvent={handleSelectEvent}/>
                    </Route>
                    <Route path={['/createEvent', '/manage/:id']}>
                        <EventForm/>
                    </Route>
                </Container>
            </>
        )}/>


    </>
  );
}

export default App;
