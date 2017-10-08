import React, {Component} from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import PageContent from '../../components/PageContent';
import BackButton from '../../containers/BackButton';
import MenuWidget from '../../components/MenuWidget';
import ListComp from '../../components/ListComp';
import ButtonComp from '../../components/ButtonComp';

class DeckDetails extends Component {
    onPress = () => {
        this.props.history.push({pathname: '/views/create-card'});
    }
    onOptionSelect = (item, i) => {
        this.props.history.push({pathname: '/modal/delete-deck'});
    }

    renderItem = (card, i) => {
        const {listItemStyle} = styles;

        return (
            <div style={listItemStyle}>
                <span>{card.hanzi}</span>
                <span>{card.pinyin}</span>
            </div>
        )
    }

    render() {
        const {
            pageContentStyle, 
            cardListStyle,
            addButtonStyle
        } = styles;

        const deck = this.props.decks.find((item) => item.id === this.props.activeDeck);
        const {cards} = deck;

        return (
            <Page>
                <HeaderBar>
                    <MenuWidget
                        items={['Delete Deck']}
                        onSelect={this.onOptionSelect}
                    />
                    <BackButton />
                </HeaderBar>
                <PageContent style={pageContentStyle}>
                    <ListComp style={cardListStyle} 
                        items={cards}
                        renderItem={this.renderItem}
                    />
                    <ButtonComp 
                        onClick={this.onPress}
                        style={addButtonStyle}
                    >Add Cards</ButtonComp>
                </PageContent>
            </Page>
        );
    }
}

const styles = {
    pageContentStyle: {
        padding: '10px'
    },
    cardListStyle: {
        height: 'calc(100% - 60px)',
        marginBottom: '10px'
    },
    listItemStyle: {
        background: 'white',
        padding: '10px',
        paddingLeft: '15px',
        paddingRight: '15px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '1em'
    },
    addButtonStyle: {
        width: '100%'
    }
}

const mapStateToProps = state => {
    const {activeDeck, decks} = state.deck;
    return {activeDeck, decks};
}

export default withRouter(connect(mapStateToProps, {

})(DeckDetails));