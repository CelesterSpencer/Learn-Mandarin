import { combineReducers } from 'redux';
import WriteHanziReducer from './WriteHanziReducer';

export default combineReducers({
    writeHanziLecture: WriteHanziReducer
});