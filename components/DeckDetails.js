import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import {} from "react-native-gesture-handler";
import Styled from "styled-components/native";
import { connect } from "react-redux";
import { handleDeleteDeck } from "../actions/decks";
import { resetQuiz } from "../actions/currentQuiz";

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

class DeckDetails extends React.Component {
  handleDelete = () => {
    const { navigation, handleDeleteDeck } = this.props;

    handleDeleteDeck().then(() => {
      navigation.navigate("Home");
    })
  };

  handleStartQuiz = () => {
    const {resetQuiz, navigation, deckId} = this.props

    resetQuiz()
    navigation.navigate("Quiz", { deckId })
  }

  shouldComponentUpdate() {
    const {render} = this.props
    return render;
  }

  render() {
    const { navigation, title, cardsCount, deckId } = this.props;

    return (
      <Container>
        <HeadingWrapper>
          <Heading>{title}</Heading>
          <SubHeading>{`${cardsCount} ${
            cardsCount === 1 ? "Card" : "Cards"
          }`}</SubHeading>
        </HeadingWrapper>

        <BtnWrapper>
          <AddCardBtn>
            <Button
              color="gray"
              title="Add Card"
              onPress={() => navigation.navigate("NewCard", { deckId })}
            />
          </AddCardBtn>
          <StartQuizBtn>
            <Button
              title="Start Quiz"
              onPress={this.handleStartQuiz}
            />
          </StartQuizBtn>
          <DeleteDeckBtn onPress={this.handleDelete}>
            <DeleteBtnTxt>Delete Deck</DeleteBtnTxt>
          </DeleteDeckBtn>
        </BtnWrapper>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, { route }) {
  const deck = decks[route.params.deckId];

  if (!deck) {
    return {
      render: false
    }
  }

  return {
    render: true,
    title: deck.title,
    cardsCount: Object.keys(deck.cards).length,
    deckId: deck.id,
  };
}

function mapDispatchToProps(dispatch, {route}) {
  const deckId = route.params.deckId

  return {
    handleDeleteDeck: () => dispatch(handleDeleteDeck(deckId)),
    resetQuiz: () => dispatch(resetQuiz())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetails);
