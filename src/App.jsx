import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        );
    }
}
