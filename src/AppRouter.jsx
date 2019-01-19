import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './modules/home/Home';
import { Feed } from './modules/feed/Feed';

export class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" component={Feed} />
                <Route path="/create" component={Feed} />
                <Route path="/ask" component={Feed} />
                <Route path="/review" component={Feed} />
            </Switch>
        );
    }
}
