import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PhoneMockup from '../components/PhoneMockup';
import SplashScreen from './SplashScreen';
import MainView from './MainView';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <PhoneMockup>
                    <Switch>
                        <Route path="/" exact component={SplashScreen} />
                        <Route path="/views" component={MainView} />
                    </Switch>
                </PhoneMockup>
            </BrowserRouter>
        );
    }
}

export default Router;