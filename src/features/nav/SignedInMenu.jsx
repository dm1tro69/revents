import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";
import user from '../../assets/user.png'
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOutUser} from "../auth/authActions";

const SignedInMenu = () => {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(state => state.auth)
    const history = useHistory()
    return (
        <Menu.Item position={'right'}>
            <Image avatar spaced={'right'} src={currentUser.photoURL || user}/>
            <Dropdown pointing={'top left'} text={currentUser.email}>
               <Dropdown.Menu>
                   <Dropdown.Item as={Link} to={'/createEvent'} text={'Create Event'} icon={'plus'}/>
                   <Dropdown.Item text={'My profile'} icon={'user'}/>
                   <Dropdown.Item onClick={()=> {
                       dispatch(signOutUser())
                       history.push('/')
                   } } text={'Sign out'} icon={'power'}/>
               </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default SignedInMenu;
