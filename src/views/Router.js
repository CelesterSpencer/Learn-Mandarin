import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mockup from '../components/mockup/Mockup';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import MainView from './mainview/MainView';
import CourseDetails from './details/CourseDetails';
import CreateDeck from './details/CreateDeck';
import CreateCourse from './details/CreateCourse';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Mockup>
                    <Switch>
                        <Route path="/" exact component={SplashScreen} />
                        <Route path="/welcome" component={WelcomeScreen} />
                        <Route path="/main" component={MainView} />
                        <Route path="/views/course-details" component={CourseDetails} />
                        <Route path="/views/create-deck" component={CreateDeck} />
                        <Route path="/views/create-course" component={CreateCourse} />
                    </Switch>
                </Mockup>
            </BrowserRouter>
        );
    }
}

export default Router;