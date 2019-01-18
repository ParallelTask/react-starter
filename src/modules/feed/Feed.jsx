import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Nav, NavItem } from 'reactstrap';
import './Feed.css';
import Article from '../article/Article';

export default class Feed extends React.Component {

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
        this.props.history.push(`${relativeUrl}/articles?q=${query}`);
    }

    render() {
        const relativeUrl = this.props.match.url;
        const query = this.state.feedValue;
        return (
            <div className="p-grid">
                <div className="p-col-fixed" style={{ width: '55%' }}>
                    <div className="box">
                        <InputText
                            value={this.state.feedValue}
                            style={{ width: '85%' }}
                            onChange={this.onFeedValue}
                        />
                        <Button icon="pi pi-search" onClick={this.onFeedSearch} />
                        <Nav>
                            <NavItem>
                                <Link to={`${relativeUrl}/articles?q=${query}`}>Articles</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`${relativeUrl}/wp`}>WhitePapers</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`${relativeUrl}/pocs`}>POCs</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`${relativeUrl}/news`}>News</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`${relativeUrl}/events`}>Events</Link>
                            </NavItem>
                        </Nav>
                        <Switch>
                            <Route
                                path={`${relativeUrl}/articles`}
                                component={Article}
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
