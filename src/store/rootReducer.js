import {combineReducers} from 'redux';
import homePageReducer from '../components/HomePage/reducer';
import cardListReducer from '../components/CardList/reducer';
import addCardPageReducer from '../components/AddCardPage/reducer';

export default combineReducers({
  homePage: homePageReducer,
  cardList: cardListReducer,
  addCardPage: addCardPageReducer
})