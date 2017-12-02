import React, { Component } from 'react';
import StuffList from './components/stuffList';

class App extends Component {
    render() {
        return (
            <div className="app">
                <StuffList />
            </div>
        );
    }
}

export default App;