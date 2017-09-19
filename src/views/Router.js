import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PhoneMockup from '../components/PhoneMockup';
import TabletMockup from '../components/TabletMockup';
import SplashScreen from './SplashScreen';
import MainView from './mainview/MainView';
import CourseDetails from './details/CourseDetails';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <TabletMockup>
                    <Switch>
                        <Route path="/" exact component={SplashScreen} />
                        <Route path="/main" component={MainView} />
                        <Route path="/views/course-details" component={CourseDetails} />
                    </Switch>
                </TabletMockup>
            </BrowserRouter>
        );
    }
}

export default Router;