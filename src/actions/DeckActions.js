import uuidv4 from 'uuid/v4';
import {
    SET_DECK_NAME,
    CREATE_DECK,
    EDIT_DECK,
    DELETE_DECK,
    SET_ACTIVE_DECK,
    GET_ACTIVE_DECK_NAME,
    SET_HANZI,
    SET_PINYIN,
    SET_TRANSLATION,
    SET_HINT,
    CREATE_CARD,
    EDIT_CARD,
    DELETE_CARD,
    SET_ACTIVE_CARD
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

export const getActiveDeckName = () => {
    return {
        type: GET_ACTIVE_DECK_NAME,
        payload: null
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

export const editDeck = (deckName) => {
    return {
        type: EDIT_DECK,
        payload: deckName
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

export const createCard = (word, translation, hint) => {
    return {
        type: CREATE_CARD,
        payload: {
            ...word,
            id: uuidv4(),
            translation,
            hint
        }
    }
}
export const editCard = (word, translation, hint) => {
    return {
        type: EDIT_CARD,
        payload: {
            ...word,
            translation,
            hint
        }
    }
}
export const deleteCard = () => {
    return {
        type: DELETE_CARD,
        payload: null
    }
}
export const setActiveCard = (card) => {
    return {
        type: SET_ACTIVE_CARD,
        payload: card.id
    }
}