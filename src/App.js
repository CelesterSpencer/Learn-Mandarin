import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import PhoneMockup from './components/PhoneMockup';
import HeaderBar from './components/HeaderBar';
import WriteHanziLecture from './views/lectures/WriteHanziLecture';

class App extends Component {
  render() {
    const {contentStyle} = styles;

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <PhoneMockup>
          <HeaderBar />
          <div style={contentStyle}>
            <WriteHanziLecture />
          </div>
        </PhoneMockup>
      </Provider>
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
