import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './modules/home/Home';
import { PropsRoute } from './modules/examples/1.props';

export class AppRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/props" component={PropsRoute} />
            </Switch>
        );
    }
}
