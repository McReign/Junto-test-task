import { EDIT_CARD } from "./constants";

export const editCard = (id, price, desc, date) => (
  {
    type: EDIT_CARD,
    payload: {
      id,
      price,
      desc,
      date
    }
  }
);