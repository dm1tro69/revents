
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import './styles.css';
import {Container} from "semantic-ui-react";
import {useState} from "react";

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
            <EventDashboard
                formOpen={formOpen}
                SetFormOpen={SetFormOpen}
                selectedEvent={selectedEvent}
                handleSelectEvent={handleSelectEvent}/>
        </Container>

    </>
  );
}

export default App;
