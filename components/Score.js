import React from "react";
import { View, Text, Button } from "react-native";
import Styled from "styled-components/native";
import { connect } from "react-redux";
import { resetQuiz } from "../actions/currentQuiz";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

const Container = Styled.View`
  flex: 1;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 80px;
  justify-content: center;
  align-items: center;
`;

const HeadingTxt = Styled.Text`
  text-align: center;
  font-size: 20.8px;
  margin-bottom: 0px;
`;
const ScoreTxt = Styled.Text`
  text-align: center;
  font-size: 120px;
  margin-bottom: 100px;
`;
const RestartQuizBtn = Styled.View`
  width: 50%;
`;

const GoToDeckBtn = Styled.View`
  width: 50%;
  margin-top: 30px;
`;

class Score extends React.Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { score, deckId, resetQuiz, navigation } = this.props;

    return (
      <Container>
        <HeadingTxt>Your Score</HeadingTxt>
        <ScoreTxt>{`${score}%`}</ScoreTxt>
        <RestartQuizBtn>
          <Button title="Restart Quiz" onPress={resetQuiz} />
        </RestartQuizBtn>
        <GoToDeckBtn>
          <Button
            title="Back to Deck"
            onPress={() => navigation.navigate("DeckDetails", { deckId })}
          />
        </GoToDeckBtn>
      </Container>
    );
  }
}

function mapStateToProps({ currentQuiz }) {
  return {
    score: Math.round((currentQuiz.score / (currentQuiz.cardNum - 1)) * 100),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    resetQuiz: () => dispatch(resetQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);
