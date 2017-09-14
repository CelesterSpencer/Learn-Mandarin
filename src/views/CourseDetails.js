import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Page from '../components/Page';
import PageContent from '../components/PageContent';
import HeaderBar from '../components/HeaderBar';
import ButtonComp from '../components/ButtonComp';
import backArrowIcon from '../res/images/backarrow.svg';

class DeckDetails extends Component {
    onBackPress() {
        this.props.history.goBack();
    }
    render() {
        const {menuBarWidgetStyle} = styles;

        return (
            <Page>
                <HeaderBar>
                    <div style={menuBarWidgetStyle}>
                        <ButtonComp onClick={this.onBackPress.bind(this)}>
                            <img alt="" src={backArrowIcon} />
                        </ButtonComp>
                    </div>
                </HeaderBar>
                <PageContent>
                    Deck Details
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    menuBarWidgetStyle: {
        width: 'auto',
        height: '50px',
        display: 'flex'
    }
}

export default withRouter(DeckDetails);