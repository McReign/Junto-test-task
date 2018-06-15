import {combineReducers} from 'redux';
import homePageReducer from '../components/HomePage/reducer';
import cardListReducer from '../components/CardList/reducer';

export default combineReducers({
  homePage: homePageReducer,
  cardList: cardListReducer
})