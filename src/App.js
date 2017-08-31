import React, { Component } from 'react';
import PhoneMockup from './components/PhoneMockup';
import CardTest from './components/CardTest';
import './App.css';

class App extends Component {
  render() {
    return (
      <PhoneMockup>
        <CardTest />
      </PhoneMockup>
    );
  }
}

export default App;
