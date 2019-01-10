import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import ASKHeader from './modules/core/Header';
import ASKFooter from './modules/core/Footer';
import ASKNavbar from './modules/core/Navbar';
import { Button } from 'reactstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <ASKHeader />
                <ASKNavbar />
                <AppRouter />
                <ASKFooter />
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default App;
