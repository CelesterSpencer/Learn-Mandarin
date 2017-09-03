import React, { Component } from 'react';
import PhoneMockup from './components/PhoneMockup';
import HeaderBar from './components/HeaderBar';
import CardTest from './pages/CardTest';
import WriteHanziPage from './pages/WriteHanziPage';

class App extends Component {
  render() {
    return (
      <PhoneMockup>
        <HeaderBar />
        <WriteHanziPage />
      </PhoneMockup>
    );
  }
}

export default App;
