import React, {Component} from 'react';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import Selection from '../../components/Selection';
import Divider from '../../components/Divider';
import Toggle from '../../components/Toggle';

class MainSettings extends Component {
    render() {
        const {settingsItemStyle} = styles;
        const wordColorCoding = [
            {text: 'Default', value: 'default'},
            {text: 'MDBG', value: 'mdbg'}
        ];
        const wordRendering = [
            {text: 'Fill', value: 'fill'},
            {text: 'Border', value: 'border'}
        ];
        const mainMenuEntryPoint = [
            {text: 'Course Overview', value: 'course-overview'},
            {text: 'Deck Overview', value: 'deck-overview'}
        ]

        return (
            <Page>
                <HeaderBar>
                </HeaderBar>
                <PageContent>
                    <div style={settingsItemStyle}>
                        Word Color-Coding
                        <Selection options={wordColorCoding} />
                    </div>
                    <Divider />
                    <div style={settingsItemStyle}>
                        Word Rendering
                        <Selection options={wordRendering} />
                    </div>
                    <Divider />
                    <div style={settingsItemStyle}>
                        Mainmenu Entrypoint
                        <Selection options={mainMenuEntryPoint} />
                    </div>
                    <Divider />
                    <div style={settingsItemStyle}>
                        Always show example
                        <Toggle />
                    </div>
                    <Divider />
                    <div style={settingsItemStyle}>
                        Always show hint
                        <Toggle />
                    </div>
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    settingsItemStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        background: 'white',
        fontSize: '1em',
        fontWeight: 'bold',
    }
}

export default MainSettings;