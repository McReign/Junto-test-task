import moment from 'moment';
import {
  SORT_CARDS,
  FILTER_CARDS
} from "./constants";

const initialState = {
  cards: [],
  sortBy: 'date',
  dates: [null, null]
};

function homePageReducer(state = initialState, action) {
  switch(action.type) {
    case SORT_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], sortBy: action.payload});
    case FILTER_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], dates: action.payload});
    default:
      return state;
  }
}

export default homePageReducer;