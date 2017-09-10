import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PhoneMockup from '../components/PhoneMockup';
import HeaderBar from '../components/HeaderBar';
import SplashScreen from './SplashScreen';
import MainView from './MainView';
import WriteHanziLecture from './lectures/WriteHanziLecture';

class Page extends Component {
    render() {
        const {pageContainerStyle, pageContentStyle} = styles;

        return (
            <div style={pageContainerStyle}>
                <HeaderBar />
                <div style={pageContentStyle} id="app-content">
                    <Switch>
                        <Route path="/" component={MainView} />
                        <Route path="/write-hanzi-lecture" component={WriteHanziLecture} />
                    </Switch>
                </div>
            </div>
        );
    }
}

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <PhoneMockup>
                    <Route path="/" exact component={SplashScreen} />
                    <Route path="/views" component={Page} />
                </PhoneMockup>
            </BrowserRouter>
        );
    }
}

const styles = {
    pageContainerStyle: {
        height: '100%'
    },
    pageContentStyle: {
        height: 'calc(100% - 50px)',
        background: '#3b3b3b',
        zIndex: 1,
        position: 'relative'
    },
    mainviewContentStyle: {
        height: 'calc(100% - 50px)'
    }
}

export default Router;