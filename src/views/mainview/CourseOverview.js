import React, {Component} from 'react';
import Radium from 'radium';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import MenuWidget from '../../components/MenuWidget';
import ListComp from '../../components/ListComp';
import AddButton from '../../containers/AddButton';

@Radium
class CourseOverview extends Component {
    handlePress() {
        this.props.history.push({pathname: '/views/create-course'});
    }

    onListItemClick(item, i) {
        console.log(item);
        this.props.history.push({pathname: '/views/course-details'});
    }

    renderEmpty(shouldRender) {
        const {containerStyle} = styles;

        if(shouldRender) {
            return (
                <div style={containerStyle}>
                    <span>Course Overview</span>
                </div>
            );  
        }
    }
    renderListItem(item, i) {
        const {listItemStyle, bigTextStyle} = styles;

        const courseName     = item.name;
        const finishedBlocks = item.finishedBlocks;
        const totalBlocks    = item.totalBlocks;

        return (
            <div key={'listItem'+i} style={listItemStyle} onClick={this.onListItemClick.bind(this, item, i)}>
                <div style={bigTextStyle}>{courseName}</div>
                <div>{finishedBlocks + '/' + totalBlocks}</div>
            </div>
        );
    }
    render() {

        const items = [
            {name: 'Course 1',    finishedBlocks: 2, totalBlocks: 10},
            {name: 'Course 2',    finishedBlocks: 0, totalBlocks: 20},
            {name: 'HSK 4',       finishedBlocks: 0, totalBlocks: 50},
            {name: 'Test',        finishedBlocks: 0, totalBlocks: 20},
            {name: 'Write Hanzi', finishedBlocks: 0, totalBlocks: 30}
        ]

        return (
            <Page>
                <HeaderBar>
                    <MenuWidget 
                        items={['Option A', 'Option B']}
                        onSelect={function(item,i){ console.log(item); }}
                    /> 
                </HeaderBar>
                <PageContent>
                    <ListComp
                        items={items}
                        renderItem={this.renderListItem.bind(this)}
                    />
                    <AddButton onPress={this.handlePress.bind(this)} />
                    {this.renderEmpty(false)}
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    containerStyle: {
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listItemStyle: {
        padding: '5px',
        paddingLeft: '10px',
        background: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Verdana'
    },
    bigTextStyle: {
        fontSize: '1.5em',
        fontWeight: 'bold'
    }
}

export default withRouter(CourseOverview);