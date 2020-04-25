import { getDecks, saveDeck } from "../utils/api";

export const ADD_DECKS = "ADD_DECKS";
export const ADD_DECK = "ADD_DECK"

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(addDecks(decks));
    });
  };
}

export function handleAddDeck(title) {
  return (dispatch) => {
    return saveDeck(title).then((deck) => {
      dispatch(addDeck(deck));
      return deck
    });
  };
}

function addDecks(decks) {
  return {
    type: ADD_DECKS,
    decks,
  };
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}