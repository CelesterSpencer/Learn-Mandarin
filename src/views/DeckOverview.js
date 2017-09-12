import React, {Component} from 'react';
import Page from '../components/Page';
import HeaderBar from '../components/HeaderBar';
import ButtonComp from '../components/ButtonComp';
import MenuWidget from '../components/MenuWidget';
import PageContent from '../components/PageContent';
import backArrowIcon from '../res/images/backarrow.svg';

class DeckOverview extends Component {
    render() {
        const {containerStyle, menuBarWidgetStyle} = styles;

        return (
            <Page>
                <HeaderBar>
                    <div style={menuBarWidgetStyle}>
                        <ButtonComp onClick={function(){ console.log('back'); }}>
                            <img alt="" src={backArrowIcon} />
                        </ButtonComp>
                    </div>
                    <MenuWidget 
                        items={['Option A', 'Option B']}
                        onSelect={function(item,i){ console.log(item); }}
                    /> 
                </HeaderBar>
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
    },
    menuBarWidgetStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex'
    }
}

export default DeckOverview;