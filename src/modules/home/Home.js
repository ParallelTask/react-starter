import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Home Links</h1>
                <Link to="/props">1. Props Example</Link>
            </Fragment>
        );
    }
}
