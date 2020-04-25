import React from "react";
import { View, Text } from "react-native";
import CardDetails from "./CardDetails";
import Score from "./Score";
import Styled from "styled-components/native";
import { connect } from "react-redux";

const Container = Styled.View`
  flex: 1
  padding: 15px;
`;
const Txt = Styled.Text`
  font-size: 17.6px;
`;

function Quiz({ currentCardNum, currentCardId, cardsCount, deckId }) {
  return (
    <Container>
      {currentCardNum <= cardsCount && (
        <Txt>{`${currentCardNum}/${cardsCount}`}</Txt>
      )}
      {currentCardNum > cardsCount ? (
        <Score />
      ) : (
        <CardDetails deckId={deckId} cardId={currentCardId} />
      )}
    </Container>
  );
}

function mapStateToProps({ decks, currentQuiz }, { route }) {
  const cardIds = Object.keys(decks[route.params.deckId].cards).sort(
    (a, b) =>
      decks[route.params.deckId].cards[a].timestamp -
      decks[route.params.deckId].cards[b].timestamp
  );

  return {
    currentCardNum: currentQuiz.cardNum,
    cardsCount: cardIds.length,
    currentCardId: cardIds[currentQuiz.cardNum - 1],
    deckId: route.params.deckId,
  };
}

export default connect(mapStateToProps)(Quiz);
