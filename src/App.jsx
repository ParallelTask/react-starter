import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
import Header from './modules/core/Header';
import Footer from './modules/core/Footer';
import Navbar from './modules/core/Navbar';

export default class App extends React.Component {
    render() {
        return (
            // Refer for routing
            // https://stackoverflow.com/questions/48640280/you-should-not-use-link-outside-a-router
            // https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4
            // Refer for className
            // https://stackoverflow.com/questions/46989454/class-vs-classname-in-react-16
            <BrowserRouter>
                <div className="main-wrapper">
                    <Header />
                    <Navbar />
                    <Footer />
                    <div className="main-content">
                        <AppRouter />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
