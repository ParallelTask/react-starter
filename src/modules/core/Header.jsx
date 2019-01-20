import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

export class Header extends React.Component {

    /**
     * @param {any} props
     */
    constructor(props) {
        super(props);
        this.state = {
            userSettings: false
        };
        this.toggle = this.toggle.bind(this);
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
                <div className="float-right user-options">
                    <Dropdown isOpen={this.state.userSettings} toggle={this.toggle}>
                        <DropdownToggle>
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
