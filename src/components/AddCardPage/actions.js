import { ADD_CARD } from "./constants";

export const addCard = (id, price, desc, date) => (
  {
    type: ADD_CARD,
    payload: {
      id,
      price,
      desc,
      date
    }
  }
);