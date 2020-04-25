import { getDecks, saveDeck, removeDeck, saveCard } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const ADD_CARD = "ADD_CARD";

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
      return deck;
    });
  };
}

export function handleAddCard(info) {
  return (dispatch) => {
    return saveCard(info).then((card) => {
      dispatch(addCard(info.deckId, card));
    });
  };
}

export function handleDeleteDeck(deckId) {
  return (dispatch) => {
    return removeDeck(deckId).then(() => {
      dispatch(deleteDeck(deckId));
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
    deck,
  };
}

function deleteDeck(deckId) {
  return {
    type: DELETE_DECK,
    deckId,
  };
}

function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}
