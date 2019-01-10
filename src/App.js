import React from 'react';
import './App.css';
import AppRouter from './AppRouter';

class App extends React.Component {
    render() {
        return (
            <div>
                <header className='App-header'>
                    Learn React
                </header>
                <AppRouter />
            </div>
        );
    }
}

export default App;