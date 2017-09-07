import React, {Component} from 'react';
import CharacterComp from './CharacterComp';

class WordComp extends Component {
    render() {
        const card = this.props.card;
        const hideHanzi = this.props.hideHanzi || false;
        const hidePinyin = this.props.hidePinyin || false;

        const {containerStyle} = styles;

        const characterComps = card.characters.map((character, i) =>
            <CharacterComp key={i} character={character} hideHanzi={hideHanzi} hidePinyin={hidePinyin} />
        );

        return (
            <div style={containerStyle}>
                {characterComps}
            </div>
        );
    }
};

const styles = {
    containerStyle: {
        textAlign: 'center'
    },
};

export default WordComp;