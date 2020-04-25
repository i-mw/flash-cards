import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import {} from "react-native-gesture-handler";
import Styled from "styled-components/native";
import { connect } from "react-redux";

const Container = Styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
  `;
const HeadingWrapper = Styled.View`

`;
const Heading = Styled.Text`
  text-align: center;
  font-size: 32px;
  margin-bottom: 15px;
`;
const SubHeading = Styled.Text`
  text-align: center;
  font-size: 17.6px;
  color: gray;
`;
const BtnWrapper = Styled.View`
  width: 60%;
`;
const AddCardBtn = Styled.View`
`;
const StartQuizBtn = Styled.View`
  margin-top: 20px;

`;
const DeleteDeckBtn = Styled.TouchableOpacity`
  margin-top: 30px;
`;
const DeleteBtnTxt = Styled.Text`
  text-align: center;
  color: darkred;
  font-size: 14.4px;
`;

function DeckDetails({ navigation, title, cardsCount, deckId }) {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>{title}</Heading>
        <SubHeading>{`${cardsCount} ${cardsCount === 1 ? 'Card': 'Cards'}`}</SubHeading>
      </HeadingWrapper>

      <BtnWrapper>
        <AddCardBtn>
          <Button
            color="gray"
            title="Add Card"
            onPress={() => navigation.navigate("NewCard", {deckId})}
          />
        </AddCardBtn>
        <StartQuizBtn>
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate("Quiz", {deckId})}
          />
        </StartQuizBtn>
        <DeleteDeckBtn onPress={() => navigation.navigate("Home")}>
          <DeleteBtnTxt>Delete Deck</DeleteBtnTxt>
        </DeleteDeckBtn>
      </BtnWrapper>
    </Container>
  );
}

function mapStateToProps({decks}, {route}) {
  const deck = decks[route.params.deckId];

  return {
    title: deck.title,
    cardsCount: Object.keys(deck.cards).length,
    deckId: deck.id
  }
}

export default connect(mapStateToProps)(DeckDetails)