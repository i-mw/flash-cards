import {AsyncStorage} from "react-native";

function generateId() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function getDecks() {
  return AsyncStorage.getItem("decks")
    .then(JSON.parse)
    .catch((e) => e);
}

export function saveDeck(title) {
  const deckId = generateId();
  const deck = {
    id: deckId,
    title,
    timestamp: Date.now(),
    cards: {},
  };

  return AsyncStorage.mergeItem("decks", JSON.stringify({ [deckId]: deck }))
    .then(() => deck)
    .catch((e) => e);
}

export function removeDeck(deckId) {
  return getDecks().then((decks) => {
    delete decks[deckId];
    return AsyncStorage.setItem("decks", JSON.stringify(decks));
  });
}

export function saveCard({ deckId, question, answer }) {
  const cardId = generateId();
  const card = {
    id: cardId,
    timestamp: Date.now(),
    question,
    answer,
  };

  return getDecks().then((decks) => {
    decks[deckId].cards[cardId] = card;
    return AsyncStorage.setItem("decks", JSON.stringify(decks)).then(
      () => card
    );
  });
}
