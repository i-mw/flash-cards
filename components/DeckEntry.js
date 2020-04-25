import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styled from "styled-components/native";
import { connect } from "react-redux";

const Container = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 150px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #dbd9d9;
`;

const Heading = Styled.Text`
  font-size: 19.2px;
  margin-bottom: 10px;
`;

const SubHeading = Styled.Text`
  font-size: 12.8px;
  color: gray;
`;

function DeckEntry({ title, cardsCount, deckId }) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("DeckDetails", { deckId, title})}>
      <Heading>{title}</Heading>
      <SubHeading>{`${cardsCount} ${cardsCount === 1 ? 'Card': 'Cards'}`}</SubHeading>
    </Container>
  );
}

function mapStateToProps({ decks }, { deckId }) {
  const deck = decks[deckId];

  return {
    title: deck.title,
    cardsCount: Object.keys(deck.cards).length,
    deckId,
  };
}

export default connect(mapStateToProps)(DeckEntry);
