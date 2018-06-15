

const initialState = {
  cards: [],
  sortBy: 'date',
  dates: ['', '']
};

function cardListReducer(state = initialState, action) {
  switch(action) {
    default:
      return state;
  }
}

export default cardListReducer;