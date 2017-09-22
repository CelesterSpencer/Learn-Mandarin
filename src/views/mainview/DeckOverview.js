import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Page from '../../components/Page';
import HeaderBar from '../../components/HeaderBar';
import MenuWidget from '../../components/MenuWidget';
import PageContent from '../../components/PageContent';
import ListComp from '../../components/ListComp';
import CenterComp from '../../components/CenterComp';
import AddButton from '../../containers/AddButton';

let decks = [
    {
        name: 'Deck 1',
        cards: [
            'card1',
            'card2',
            'card3'
        ]
    },
    {
        name: 'Deck 2',
        cards: [
            'card1',
            'card2',
            'card3',
            'card1',
            'card2',
            'card3',
            'card1',
            'card2',
            'card3',
        ]
    },
    {
        name: 'Deck 3',
        cards: [
            'card1',
            'card2',
            'card3',
            'card1',
            'card2',
            'card3'
        ]
    }
];

class DeckOverview extends Component {
    onAddButtonPress() {
        this.props.history.push({pathname: '/views/create-deck'});
    }

    onListItemClick(deck, i) {
        this.props.history.push({pathname: '/views/deck-details'});
    }

    renderEmpty(shouldRender) {
        if(shouldRender) {
            return (
                <CenterComp>
                    Deck Overview
                </CenterComp>
            );
        }
    }

    renderListItem(deck, i) {
        const {listItemStyle, bigTextStyle} = styles;

        const deckName = deck.name;
        const cardCount = deck.cards.length;

        return (
            <div style={listItemStyle} onClick={this.onListItemClick.bind(this, deck, i)}>
                <div style={bigTextStyle}>{deckName}</div>
                <div>{cardCount}</div>
            </div>
        );
    }

    render() {
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
                        items={decks}
                        renderItem={this.renderListItem.bind(this)}
                    />
                    {this.renderEmpty(decks.length === 0)}
                    <AddButton onPress={this.onAddButtonPress.bind(this)} />
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

export default withRouter(DeckOverview);