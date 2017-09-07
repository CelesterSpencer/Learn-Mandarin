import {
    SET_CHARACTER_INDEX
} from '../actions/types';

const INITIAL_STATE = {
    characterIndex: 0
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SET_CHARACTER_INDEX:
        return { ...state, characterIndex: action.payload };
      default:
        return state;
    }
};