import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './modules/home/Home';
import Feed from './modules/feed/Feed';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/feed" component={Feed} />
            </Switch>
        );
    }
}
