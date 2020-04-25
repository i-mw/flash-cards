import React from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import Styled from "styled-components/native";
import { connect } from "react-redux";
import { addAnswer } from "../actions/currentQuiz";

const Container = Styled.View`
  flex: 1;
  padding-right: 12px;
  padding-left: 12px;
  justify-content: space-evenly;
  align-items: center;
`;
const QAWrapper = Styled.View`
`;
const QATxt = Styled.Text`
  font-size: 40px;
  text-align: center;
`;
const QABtn = Styled.TouchableOpacity`
  margin-top: 25px;
`;
const QABtnTxt = Styled.Text`
  text-align: center;
  color: darkred;
  font-size: 17.6px;
`;

const BtnWrapper = Styled.View`
  width: 60%;
`;
const CorrectBtn = Styled.View`
  margin-bottom: 20px;
`;
const IncorrectBtn = Styled.View`
`;

class CardDetails extends React.Component {
  state = {
    showing: "question",
  };

  handleAnswer = (correct) => {
    const {addAnswer} = this.props;

    addAnswer(correct)
    this.setState({showing: 'question'})
  }

  render() {
    const { question, answer, handleAnswer } = this.props;
    const { showing } = this.state;

    return (
      <Container>
        {showing === "question" ? (
          <QAWrapper>
            <QATxt>{question}</QATxt>
            <QABtn>
              <QABtnTxt onPress={() => this.setState({ showing: "answer" })}>
                Answer
              </QABtnTxt>
            </QABtn>
          </QAWrapper>
        ) : (
          <QAWrapper>
            <QATxt>{answer}</QATxt>
            <QABtn>
              <QABtnTxt onPress={() => this.setState({ showing: "question" })}>
                Question
              </QABtnTxt>
            </QABtn>
          </QAWrapper>
        )}

        <BtnWrapper>
          <CorrectBtn>
            <Button color="#008009" title="Correct" onPress={() => this.handleAnswer(true)} />
          </CorrectBtn>
          <IncorrectBtn>
            <Button
              color="#f54545"
              title="Incorrect"
              onPress={() => this.handleAnswer(false)}
            />
          </IncorrectBtn>
        </BtnWrapper>
      </Container>
    );
  }
}

function mapStateToProps({ decks }, { deckId, cardId }) {
  const card = decks[deckId].cards[cardId];

  return {
    question: card.question,
    answer: card.answer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addAnswer: (correct) => dispatch(addAnswer(correct)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);
