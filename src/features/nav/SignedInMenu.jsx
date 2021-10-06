import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import user from '../../assets/user.png'
import {Link} from "react-router-dom";

const SignedInMenu = ({SignOut}) => {
    return (
        <Menu.Item position={'right'}>
            <Image avatar spaced={'right'} src={user}/>
            <Dropdown pointing={'top left'} text={'Bob'}>
               <Dropdown.Menu>
                   <Dropdown.Item as={Link} to={'/createEvent'} text={'Create Event'} icon={'plus'}/>
                   <Dropdown.Item text={'My profile'} icon={'user'}/>
                   <Dropdown.Item onClick={SignOut} text={'Sign out'} icon={'power'}/>
               </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default SignedInMenu;
