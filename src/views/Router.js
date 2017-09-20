import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mockup from '../components/mockup/Mockup';
import SplashScreen from './SplashScreen';
import MainView from './mainview/MainView';
import CourseDetails from './details/CourseDetails';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Mockup>
                    <Switch>
                        <Route path="/" exact component={SplashScreen} />
                        <Route path="/main" component={MainView} />
                        <Route path="/views/course-details" component={CourseDetails} />
                    </Switch>
                </Mockup>
            </BrowserRouter>
        );
    }
}

export default Router;