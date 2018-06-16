import moment from 'moment';
import {
  SORT_CARDS,
  FILTER_CARDS,
  DELETE_CARD
} from "./constants";
import {ADD_CARD} from '../../components/AddCardPage/constants';
import {EDIT_CARD} from '../../components/EditCardPage/constants';
import cardReducer from '../../components/AddCardPage/reducer';
import editCardReducer from '../../components/EditCardPage/reducer';

const initialState = {
  cards: [],
  sortBy: 'date',
  dates: [null, null]
};

function homePageReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
      return Object.assign({}, state, { cards: [...state.cards, cardReducer({}, action)]});
    case SORT_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], sortBy: action.payload});
    case FILTER_CARDS:
      return Object.assign({}, state, { cards: [...state.cards], dates: action.payload});
    case DELETE_CARD:
      return Object.assign({}, state, { cards: state.cards.filter(item => item.id !== action.payload)});
    case EDIT_CARD:
      return Object.assign({}, state, { cards: state.cards.map(item => editCardReducer(item, action))});
    default:
      return state;
  }
}

export default homePageReducer;