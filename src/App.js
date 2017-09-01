import React, { Component } from 'react';
import PhoneMockup from './components/PhoneMockup';
import CardTest from './components/CardTest';
import WriteHanziPage from './pages/WriteHanziPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <PhoneMockup>
        <WriteHanziPage />
      </PhoneMockup>
    );
  }
}

export default App;
