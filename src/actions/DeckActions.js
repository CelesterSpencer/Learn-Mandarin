import uuidv4 from 'uuid/v4';
import {
    SET_DECK_NAME,
    CREATE_DECK,
    DELETE_DECK,
    SET_ACTIVE_DECK,
    SET_HANZI,
    SET_PINYIN,
    SET_TRANSLATION,
    SET_HINT,
    CREATE_CARD
} from './types';

//--------------------------------------------------------------//
// DECK
//--------------------------------------------------------------//
export const setDeckName = (deckName) => {
    return {
        type: SET_DECK_NAME,
        payload: deckName
    }
}

export const createDeck = (deckName) => {
    let deck = {
        name: deckName,
        id: uuidv4(),
        cards: []
    };

    return {
        type: CREATE_DECK,
        payload: deck
    }
}

export const deleteDeck = () => {
    return {
        type: DELETE_DECK,
        payload: null
    }
}

export const setActiveDeck = (deck) => {
    return {
        type: SET_ACTIVE_DECK,
        payload: deck
    }
}

//--------------------------------------------------------------//
// CARD
//--------------------------------------------------------------//
export const setHanzi = (hanzi) => {
    return {
        type: SET_HANZI,
        payload: hanzi
    }
}
export const setPinyin = (pinyin) => {
    return {
        type: SET_PINYIN,
        payload: pinyin
    }
}
export const setTranslation = (translation) => {
    return {
        type: SET_TRANSLATION,
        payload: translation
    }
}
export const setHint = (hint) => {
    return {
        type: SET_HINT,
        payload: hint
    }
}

export const createCard = (hanzi, pinyin, translation, hint) => {
    const card = {
        hanzi,
        pinyin,
        translation,
        hint
    }
    return {
        type: CREATE_CARD,
        payload: card
    }
}