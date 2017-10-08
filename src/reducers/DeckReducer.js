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
} from '../actions/types';
import {REHYDRATE} from 'redux-persist/constants'

const INITIAL_STATE = {
    deckName: '',
    decks: [],
    activeDeck: null,
    hanzi: '',
    pinyin: '',
    translation: '',
    hint: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE: 
            return action.payload.deck || INITIAL_STATE;
        case SET_DECK_NAME:
            return {...state, deckName: action.payload};
        case CREATE_DECK:
            const newDecks = [...state.decks, action.payload];
            return { ...state, decks: newDecks };
        case DELETE_DECK:
            if(state.activeDeck) {
                const index = state.decks.findIndex((deck) => deck.id === state.activeDeck);
                const decks = [
                    ...state.decks.slice(0, index), 
                    ...state.decks.slice(index+1)
                ];
                return { ...state, decks};
            }
            return state;
        case SET_ACTIVE_DECK:
            return { ...state, activeDeck: action.payload.id }
        case SET_HANZI:
            return { ...state, hanzi: action.payload }
        case SET_PINYIN:
            return { ...state, pinyin: action.payload }
        case SET_TRANSLATION:
            return { ...state, translation: action.payload }
        case SET_HINT:
            return { ...state, hint: action.payload }
        case CREATE_CARD:
            if(state.activeDeck) {
                const decks = state.decks.map((item, i) => {
                    if(item.id !== state.activeDeck) return item;

                    const cards = [...item.cards, action.payload];
                    return {...item, cards}
                });
                return { 
                    ...state, 
                    decks,
                    hanzi: '',
                    pinyin: '',
                    translation: '',
                    hint: ''
                };
            }
            return state;
        default:
            return state;
    }
};