import { combineReducers } from 'redux';
import WriteHanziReducer from './WriteHanziReducer';
import DeckReducer from './DeckReducer';

export default combineReducers({
    deck: DeckReducer,
    writeHanziLecture: WriteHanziReducer
});