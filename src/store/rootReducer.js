import {combineReducers} from 'redux';
import homePageReducer from '../components/HomePage/reducer';
import editCardPage from '../components/EditCardPage/reducer';
import addCardPageReducer from '../components/AddCardPage/reducer';

export default combineReducers({
  homePage: homePageReducer,
  editCardPage: editCardPage,
  addCardPage: addCardPageReducer
})