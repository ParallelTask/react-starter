import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends React.Component {
    render() {
        return (
            <div id="nav-side-menu">
                <ul className="menu-content collapse out">
                    <li className="treeview side-menu">
                        <Link to="/search"><i className="pi pi-search"></i>Search</Link>
                    </li>
                    <li className="treeview side-menu">
                        <Link to="/create"><i className="pi pi-pencil"></i>Create</Link>
                    </li>
                    <li className="treeview side-menu">
                        <Link to="/review"><i className="pi pi-sitemap"></i>Review</Link>
                    </li>
                    <li className="treeview side-menu">
                        <Link to="/ask"><i className="pi pi-question"></i>Ask</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
