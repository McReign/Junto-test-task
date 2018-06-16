import {EDIT_CARD} from "./constants";

const initialState = {};

function editCardReducer(state = initialState, action) {
  switch(action.type) {
    case EDIT_CARD:
      return (state.id !== action.payload.id) ?
        state :
        {
          ...state,
          price: action.payload.price,
          desc: action.payload.desc,
          date: action.payload.date
        };
    default:
      return state;
  }
}

export default editCardReducer;