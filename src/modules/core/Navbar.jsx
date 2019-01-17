import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div id="nav-side-menu">
                <ul className="menu-content collapse out">
                    <li className="treeview side-menu">
                    </li>
                </ul>
            </div>
        );
    }
}
