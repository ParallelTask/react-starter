import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Nav, NavItem } from 'reactstrap';
import { Article } from '../article/Article';
import { News } from '../news/News';
import './Feed.css';

export class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feedValue: ''
        };
        this.onFeedSearch = this.onFeedSearch.bind(this);
        this.onFeedValue = this.onFeedValue.bind(this);
    }

    onFeedValue(e) {
        this.setState({ feedValue: e.target.value });
    }

    onFeedSearch() {
        const query = this.state.feedValue;
        const relativeUrl = this.props.match.url;
        this.props.history.push(`${relativeUrl}/news?q=${query}`);
    }

    render() {
        const relativeUrl = this.props.match.url;
        const query = this.state.feedValue;
        return (
            <div className="p-grid">
                <div className="p-col-fixed">
                    <div className="box">
                        <InputText
                            className="inp-feed-search"
                            value={this.state.feedValue}
                            onChange={this.onFeedValue}
                        />
                        <Button
                            className="btn-feed-search"
                            icon="pi pi-search"
                            onClick={this.onFeedSearch}
                        />
                        <Nav>
                            <NavItem>
                                <NavLink
                                    activeClassName="active-feed"
                                    to={`${relativeUrl}/news`}
                                >News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active-feed"
                                    to={{
                                        pathname: `${relativeUrl}/articles`,
                                        search: `q=${query}`
                                    }}
                                >Articles</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active-feed"
                                    to={`${relativeUrl}/wp`}
                                >WhitePapers</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active-feed"
                                    to={`${relativeUrl}/pocs`}
                                >POCs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    activeClassName="active-feed"
                                    to={`${relativeUrl}/events`}
                                >Events</NavLink>
                            </NavItem>
                        </Nav>
                        <Switch>
                            <Route
                                path={`${relativeUrl}/articles`}
                                component={Article}
                            />
                            <Route
                                path={`${relativeUrl}/news`}
                                component={News}
                            />
                        </Switch>
                    </div>
                </div>
                <div className="p-col">
                    <div className="box">Notifications</div>
                </div>
            </div>
        );
    }
}
