import React, {Component} from 'react';
import TextField from '../components/TextField';
import CharacterComp from '../components/CharacterComp';
import HanziWriterComp from '../components/HanziWriterComp';
import SquareComp from '../components/SquareComp';
import deck from './../res/data/deck.json';

class WriteHanziPage extends Component {
    render() {
        const {
            containerStyle,
            pinyinStyle,
            translationCompsStyle
        } = styles;

        const {characters, translations, hints} = deck.cards[0];
        const characterComps = characters.map((character, i) =>
            <CharacterComp key={i} character={character} hideHanzi={true} />
        );
        const translation = translations[0];

        return (
            <div style={containerStyle}>
                <div style={pinyinStyle}>
                    {characterComps}
                </div>
                <div style={translationCompsStyle}>
                    <TextField key={1} text={translation} />
                </div>
                <SquareComp>
                    <HanziWriterComp />
                </SquareComp>
            </div>
        )
    }
};

const styles = {
    containerStyle: {
        height: 'calc(100% - 20px)',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    pinyinStyle: {
        textAlign: 'center'
    },
    translationCompsStyle: {

    },
    writerCompStyle: {
        flex: 1
    }
};

export default WriteHanziPage;