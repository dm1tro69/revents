import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";
import '../../app/layout/styles.css'
import logo from '../../assets/logo.png'
import {NavLink} from "react-router-dom";

const NavBar = ({SetFormOpen, formOpen}) => {
    return (
        <Menu inverted fixed={'top'}>
          <Container>
              <Menu.Item as={NavLink} exact to={'/'} header>
                  <img src={logo} alt="logo" style={{marginRight: '15px'}}/>
                  Re-vents
              </Menu.Item>
              <Menu.Item as={NavLink} to={'/events'} name="Events"/>
              <Menu.Item as={NavLink} to={'/createEvent'}>
                  <Button positive inverted content={'Create Event'}/>
              </Menu.Item>
              <Menu.Item position={'right'}>
                  <Button basic inverted content={'Login'}/>
                  <Button basic inverted content={'Register'} style={{marginLeft: '0.5em'}}/>
              </Menu.Item>
          </Container>
        </Menu>
    );
};

export default NavBar;
