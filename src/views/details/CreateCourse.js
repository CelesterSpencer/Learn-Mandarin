import React, {Component} from 'react';
import Page from '../../components/Page';
import PageContent from '../../components/PageContent';
import HeaderBar from '../../components/HeaderBar';
import BackButton from '../../containers/BackButton';
import TextInput from '../../components/TextInput';
import ListComp from '../../components/ListComp';
import ButtonComp from '../../components/ButtonComp';
import Collapsible from '../../components/Collapsible';
import Toggle from '../../components/Toggle';

const LECTURES = [
    {name: 'Chinese to Translation', settings: [
        {timeAttack: false}
    ]},
    {name: 'Translation to Chinese', settings: []},
    {name: 'Write Hanzi', settings: []},
    {name: 'Guess tones', settings: []}
]

class CreateCourse extends Component {
    renderLecture = (item) => {
        const {
            lectureStyle, 
            lectureSettingsStyle,
            lectureSettingsRowStyle
        } = styles;

        if(item.settings.length > 0) {
            return (
                <Collapsible 
                    renderGeneral={() => (
                        <div style={lectureStyle}>
                            {item.name}
                        </div>
                    )}
                    renderDetails={() => (
                        <div style={lectureSettingsStyle}>
                            <div style={lectureSettingsRowStyle}>
                                timeAttack
                                <Toggle />
                            </div>
                        </div>
                    )}
                />
                
            );
        } else {
            return (
                <div style={lectureStyle}>
                    {item.name}
                </div>
            );
        }
    }

    render() {
        const {pageStyle, listStyle, labelStyle} = styles;

        return (
            <Page>
                <HeaderBar>
                    <BackButton />
                </HeaderBar>
                <PageContent style={pageStyle}>
                    <div style={labelStyle}>Course name:</div>
                    <TextInput />
                    <div style={labelStyle}>Lectures:</div>
                    <ListComp
                        style={listStyle}
                        items={LECTURES}
                        renderItem={this.renderLecture}
                    />
                    <ButtonComp>Add Lecture</ButtonComp>
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    pageStyle: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    labelStyle: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    listStyle: {
        height: 'auto'
    },
    lectureStyle: {
        background: 'white',
        padding: '5px'
    },
    lectureSettingsStyle: {
        background: 'white',
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px'
    },
    lectureSettingsRowStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export default CreateCourse;