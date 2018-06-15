import {
  ADD_CARD,
  SORT_CARDS,
  FILTER_CARDS
} from "./constants";

export const addCard = (cardData) => (
  {
    type: ADD_CARD,
    payload: cardData
  }
);

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
