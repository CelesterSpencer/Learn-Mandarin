import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Mockup from '../components/mockup/Mockup';
import SplashScreen from './SplashScreen';
import WelcomeScreen from './WelcomeScreen';
import MainView from './mainview/MainView';
import CourseDetails from './details/CourseDetails';
import CreateCourse from './details/CreateCourse';
import DeckDetails from './deck/DeckDetails';
import CreateDeck from './deck/CreateDeck';
import EditDeck from './deck/EditDeck';
import DeleteDeck from './modals/DeleteDeck';
import CreateCard from './deck/CreateCard';
import EditCard from './deck/EditCard';
import DeleteCard from './modals/DeleteCard';


class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Mockup pathname="/">
                <Switch>
                        <Route path="/" exact component={SplashScreen} />
                        <Route path="/welcome" component={WelcomeScreen} />
                        <Route path="/main" component={MainView} />
                        <Route path="/views/course-details" component={CourseDetails} />
                        <Route path="/views/create-course" component={CreateCourse} />
                        <Route path="/views/deck-details" component={DeckDetails} />
                        <Route path="/views/create-deck" component={CreateDeck} />
                        <Route path="/views/edit-deck" component={EditDeck} />
                        <Route path='/modal/delete-deck' component={DeleteDeck} />
                        <Route path="/views/create-card" component={CreateCard} />
                        <Route path="/views/edit-card" component={EditCard} />
                        <Route path='/modal/delete-card' component={DeleteCard} />
                    </Switch>
                </Mockup>
            </BrowserRouter>
        );
    }
}

export default Router;