import React, {useState} from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import '../../app/layout/styles.css'
import logo from '../../assets/logo.png'
import {NavLink, useHistory} from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";

const NavBar = ({SetFormOpen, formOpen}) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false)

    const handleSignOut = () => {
        setAuthenticated(false)
        history.push('/')
    }

    return (
        <Menu inverted fixed={'top'}>
          <Container>
              <Menu.Item as={NavLink} exact to={'/'} header>
                  <img src={logo} alt="logo" style={{marginRight: '15px'}}/>
                  Re-vents
              </Menu.Item>
              <Menu.Item as={NavLink} to={'/events'} name="Events"/>
              {authenticated && (
                  <Menu.Item as={NavLink} to={'/createEvent'}>
                      <Button positive inverted content={'Create Event'}/>
                  </Menu.Item>
              )}

              {authenticated ? <SignedInMenu SignOut={handleSignOut}/>: <SignedOutMenu setAuthenticated={setAuthenticated}/>}


          </Container>
        </Menu>
    );
};

export default NavBar;
