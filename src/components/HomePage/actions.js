import {
  SORT_CARDS,
  FILTER_CARDS,
  DELETE_CARD
} from "./constants";


export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id
  }
};

export const sortCards = (type) => (
  {
    type: SORT_CARDS,
    payload: type
  }
);

export const filterCards = (datesRange) => (
  {
    type: FILTER_CARDS,
    payload: datesRange
  }
);

