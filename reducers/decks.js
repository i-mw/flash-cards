import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    case DELETE_DECK:
      const newState = {
        ...state,
      };
      delete newState[action.deckId]
      return newState;
    default:
      return state;
  }
}
