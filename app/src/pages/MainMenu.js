import React from 'react';
import {NavLink} from 'react-router-dom';
import Picture from '../components/Picture';
import pic from '../pictures/profile.png';
import pages from '../css/index.scss';

const selectedStyle = {
    backgroundColor : "white",
    color: "slateGray"
}
const MainMenu = ()=>(
    <nav className="mainMenu">
        <Picture picture={pic}></Picture>
        <NavLink to="/" activeStyle={selectedStyle}>[Home]</NavLink>
    </nav>
);

export default MainMenu;