
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import './styles.css';
import {Container} from "semantic-ui-react";
import {useState} from "react";

function App() {
    const [formOpen, SetFormOpen] = useState(false)
  return (
    <>
     <NavBar SetFormOpen={SetFormOpen} formOpen={formOpen}/>
        <Container className={'main'}>
            <EventDashboard formOpen={formOpen} SetFormOpen={SetFormOpen}/>
        </Container>

    </>
  );
}

export default App;
