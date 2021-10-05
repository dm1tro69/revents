
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import './styles.css';
import {Container} from "semantic-ui-react";
import {Route, Switch} from "react-router-dom";
import {useState} from "react";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";

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
     <NavBar SetFormOpen={handleCreateFormOpen} formOpen={formOpen}/>
        <Container className={'main'}>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage/>
                </Route>
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
                <Route path={'/createEvent'}>
                    <EventForm/>
                </Route>

            </Switch>
        </Container>

    </>
  );
}

export default App;
