import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './modules/home/Home';
import About from './modules/about/About';

class ASKAppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about/" component={About} />
                </Switch>
            </Router>
        );
    }
}

export default ASKAppRouter;
