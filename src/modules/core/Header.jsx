import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            userSettings: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            userSettings: !prevState.userSettings
        }));
    }

    render() {
        return (
            <nav className="navbar navbar-fixed-top main-header">
                <span className="glyphicon glyphicon-menu-hamburger menu-toggle" data-target="#menu-content"></span>
                <img className="logo-img" src={process.env.PUBLIC_URL + '/images/logo-ggk.png'} alt="ggk-logo" />
                <div className="float-right user-options">
                    <Dropdown isOpen={this.state.userSettings} toggle={this.toggle}>
                        <DropdownToggle caret>
                            <div className="user-img">K</div>
                            <span className="user-name">Karthik Konkula</span>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </nav>
        );
    }
}