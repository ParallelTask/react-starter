import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {
        return (
            <div id="nav-side-menu">
                <ul className="menu-content collapse out">
                    <li className="treeview side-menu">
                        <Link to="/feed"><i className="pi pi-clone"></i>Search</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
