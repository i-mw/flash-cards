import { getDecks, saveDeck } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK"

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
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

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  }
}