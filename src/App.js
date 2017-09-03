import React, { Component } from 'react';
import PhoneMockup from './components/PhoneMockup';
import HeaderBar from './components/HeaderBar';
import CardTest from './pages/CardTest';
import WriteHanziPage from './pages/WriteHanziPage';

class App extends Component {
  render() {
    const {contentStyle} = styles;

    return (
      <PhoneMockup>
        <HeaderBar />
        <div style={contentStyle}>
          <WriteHanziPage />
        </div>
      </PhoneMockup>
    );
  }
}

const styles = {
  contentStyle: {
    height: 'calc(100% - 50px)',
    background: '#3b3b3b',
    zIndex: 1,
    position: 'relative'
  }
};

export default App;
