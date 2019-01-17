import React from 'react';
// import { Button } from 'primereact/button';
import './App.css';
// import AppRouter from './AppRouter';
import Header from './modules/core/Header';
import Footer from './modules/core/Footer';
import Navbar from './modules/core/Navbar';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <Header />
                <ASKNavbar />
                <AppRouter />
                <ASKFooter />
                <Button label="Danger" className="p-button-raised p-button-danger" /> */}
                <div className="main-wrapper">
                    <Header />
                    <Navbar />
                    <Footer />
                    {/* <div className="main-content">
                        <router-outlet></router-outlet>
                    </div>
                    <ims-footer></ims-footer> */}
                </div>
            </div>
        );
    }
}

export default App;
