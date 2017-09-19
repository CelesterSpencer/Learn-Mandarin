import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import TabBar from '../../components/TabBar';
import CourseOverview from './CourseOverview';
import DeckOverview from './DeckOverview';
import MainSettings from './MainSettings';
import courseIcon from '../../res/images/study.svg';
import deckIcon from '../../res/images/folder_side.svg';
import settingsIcon from '../../res/images/settings.svg';

class MainView extends Component {
    handleTabChange(tabLabel, tabIdx) {
        this.props.history.push({pathname: '/main'+tabLabel});
    }
    render() {
        const {pageContainerStyle, mainviewContentStyle} = styles;

        return (
            <div style={pageContainerStyle}>
                <div style={mainviewContentStyle}>
                    <Switch>
                        <Route path="/main/course-overview" component={CourseOverview} />
                        <Route path="/main/deck-overview" component={DeckOverview} />
                        <Route path="/main/main-settings" component={MainSettings} />
                    </Switch>
                </div>
                <TabBar
                    onTabChange={this.handleTabChange.bind(this)}
                    defaultTab={'/course-overview'}
                    tabs={[
                        {label: '/course-overview', icon: courseIcon, dimensions: {width: '40px', height: '40px'}},
                        {label: '/deck-overview', icon: deckIcon},
                        {label: '/main-settings', icon: settingsIcon}
                    ]}
                />
            </div>
        );
    }
}

const styles = {
    pageContainerStyle: {
        height: '100%'
    },
    mainviewContentStyle: {
        height: 'calc(100% - 50px)'
    }
}

export default withRouter(MainView);