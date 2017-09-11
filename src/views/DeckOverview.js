import React, {Component} from 'react';
import Page from '../components/Page';
import HeaderBar from '../components/HeaderBar';
import PageContent from '../components/PageContent';

class DeckOverview extends Component {
    render() {
        const {containerStyle} = styles;        

        return (
            <Page>
                <HeaderBar />
                <PageContent>
                    <div style={containerStyle}>
                        <span>Deck Overview</span>
                    </div>
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
    }
}

export default DeckOverview;