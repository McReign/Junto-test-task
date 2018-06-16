import {ADD_CARD} from "./constants";

const initialState = {};

function addCardReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
      return {
        id: action.payload.id,
        price: action.payload.price,
        desc: action.payload.desc,
        date: action.payload.date
      };
    default:
      return state;
  }
}

export default addCardReducer;