import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import '../../app/layout/styles.css'
import logo from '../../assets/logo.png'
import {NavLink} from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import {useSelector} from "react-redux";

const NavBar = ({SetFormOpen, formOpen}) => {

    const {authenticated} = useSelector(state => state.auth)

    return (
        <Menu inverted fixed={'top'}>
          <Container>
              <Menu.Item as={NavLink} exact to={'/'} header>
                  <img src={logo} alt="logo" style={{marginRight: '15px'}}/>
                  Re-vents
              </Menu.Item>
              <Menu.Item as={NavLink} to={'/events'} name="Events"/>
              <Menu.Item as={NavLink} to={'/sandbox'} name="Sandbox"/>
              {authenticated && (
                  <Menu.Item as={NavLink} to={'/createEvent'}>
                      <Button positive inverted content={'Create Event'}/>
                  </Menu.Item>
              )}

              {authenticated ? <SignedInMenu />: <SignedOutMenu />}


          </Container>
        </Menu>
    );
};

export default NavBar;
