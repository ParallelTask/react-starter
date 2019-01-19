import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { Header } from './modules/core/Header';
import { Footer } from './modules/core/Footer';
import { Navbar } from './modules/core/Navbar';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-wrapper">
                    <Header />
                    <Navbar />
                    <div className="main-content">
                        <AppRouter />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
