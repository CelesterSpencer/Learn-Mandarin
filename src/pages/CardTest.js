import React, {Component} from 'react';
import CharacterComp from '../components/CharacterComp';
import TextField from '../components/TextField';
import deck from './../res/data/deck.json';

class CardTest extends Component {
    render() {
        const {
            containerStyle, 
            characterCompsStyle, 
            translationCompsStyle, 
            hintStyle, 
            dividerStyle
        } = styles;

        const {characters, translations, hints} = deck.cards[0];
        const characterComps = characters.map((character, i) =>
            <CharacterComp key={i} character={character} />
        );
        const translationComps = translations.map((translation, i) =>
            <TextField key={i} text={translation} />
        );
        const hintComps = hints.map((hint, i) =>
            <div key={i}>{hint}</div>
        );

        return (
            <div style={containerStyle}>
                <div style={characterCompsStyle}>
                    {characterComps}
                </div>
                <div style={dividerStyle} />
                <div style={translationCompsStyle}>
                    {translationComps}
                </div>
                <div style={dividerStyle} />
                <div style={hintStyle}>
                    {hintComps}
                </div>
            </div>
        )
    }
};

const styles = {
    containerStyle: {
        height: '100%',
        background: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    characterCompsStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px'
    },
    translationCompsStyle: {
        background: 'white',
        padding: '10px',
    },
    hintStyle: {
        background: 'white',
        padding: '10px',
        flexGrow: '1',
        justifyContent: 'center',
        fontSize: '1.5em'
    },
    dividerStyle: {
        background: 'gray',
        height: '1px',
        marginLeft: '10%',
        marginRight: '10%'
    }
};

export default CardTest;