import React, {Component} from 'react';
import CardComponent from './CardComponent';
import deck from './../res/data/deck.json';

class CardTest extends Component {
    render() {
        const {characters} = deck.cards[0];
        const cardComponents = characters.map((character, i) =>
            <CardComponent key={i} character={character} />
        );

        return (
            <div>
                {cardComponents}
            </div>
        )
    }
};

export default CardTest;