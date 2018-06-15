import {
  ADD_CARD,
  SORT_CARDS,
  FILTER_CARDS
} from "./constants";

const initialState = {
  cards: [],
  sortBy: 'date',
  dates: ['', '']
};

function homePageReducer(state = initialState, action) {
  switch(action) {
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, action.payload]});
    case SORT_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], sortBy: action.payload});
    case FILTER_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], dates: action.payload});
    default:
      return state;
  }
}

export default homePageReducer;