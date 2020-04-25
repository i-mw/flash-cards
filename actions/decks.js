import { getDecks } from "../utils/api";

export const ADD_DECKS = 'ADD_DECKS';

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then(decks => {
      dispatch(addDecks(decks));
    })
  }
}

function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}