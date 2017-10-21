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
} from '../actions/types';
import {REHYDRATE} from 'redux-persist/constants'

const INITIAL_STATE = {
    deckName: '',
    decks: [],
    activeDeck: null,
    hanzi: '',
    pinyin: '',
    translation: '',
    hint: '',
    activeCard: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REHYDRATE: 
            return action.payload.deck || INITIAL_STATE;
        
            case SET_DECK_NAME:
            return {...state, deckName: action.payload};
        // DECK REDUCERS
        case GET_ACTIVE_DECK_NAME:
            const index = state.decks.findIndex((deck) => deck.id === state.activeDeck);
            const deckName = state.decks[index].name;
            return {...state, deckName};
        case CREATE_DECK:
            const newDecks = [...state.decks, action.payload];
            return { ...state, decks: newDecks };
        case EDIT_DECK:
            const decks = state.decks.map((deck) => {
                if(deck.id !== state.activeDeck) return deck;

                return {...deck, name: action.payload};
            });
            return {
                ...state,
                decks
            }
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
        // CARD REDUCERS
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
        case EDIT_CARD:
            if(state.activeDeck) {
                const decks = state.decks.map((item, i) => {
                    if(item.id !== state.activeDeck) return item;

                    const cards = item.cards.map((card, i) => {
                        if(card.id !== state.activeCard) return card;
                        const {hanzi, pinyin, tones, types, translation, hint} = action.payload;
                        console.log('found card');
                        return {
                            ...card,
                            hanzi,
                            pinyin,
                            tones,
                            types,
                            translation,
                            hint
                        }
                    });
                    console.log(cards);
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
        case DELETE_CARD:
            if(state.activeDeck) {
                const decks = state.decks.map((item, i) => {
                    if(item.id !== state.activeDeck) return item;

                    const index = item.cards.findIndex((card) => card.id === state.activeCard);
                    const cards = [
                        ...item.cards.slice(0, index), 
                        ...item.cards.slice(index+1)
                    ];
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
        case SET_ACTIVE_CARD:
            return { ...state, activeCard: action.payload}
        default:
            return state;
    }
};