import React from "react";
import { View, Text, Button } from "react-native";
import Styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";

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
const GoHomeBtn = Styled.View`
  width: 50%;
`;

function Score({score}) {
  const navigation = useNavigation();

  return (
    <Container>
      <HeadingTxt>Your Score</HeadingTxt>
      <ScoreTxt>{`${score}%`}</ScoreTxt>
      <GoHomeBtn>
        <Button
          title="Go to decks"
          onPress={() => navigation.navigate("Home", { scree: "DeckList" })}
        />
      </GoHomeBtn>
    </Container>
  );
}

function mapStateToProps({currentQuiz}) {
  return {
    score: Math.round((currentQuiz.score/(currentQuiz.cardNum-1))*100)
  }
}

export default connect(mapStateToProps)(Score)