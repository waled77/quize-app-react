import React, { Component } from 'react';
import './App.css';
import Questions from './Components/Questions/Questions';

class App extends Component {
    render () {
        return (
            <div className="app">
                <Questions />
            </div>
            
        )
    }
}

export default App;
