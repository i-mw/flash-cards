import React from "react";
import { View, Text, Button } from "react-native";
import Styled from 'styled-components/native'

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
  font-size: 1.3em;
  margin-bottom: 15px;
`
const ScoreTxt = Styled.Text`
  text-align: center;
  font-size: 6em;
  margin-bottom: 50px;
`
const GoHomeBtn = Styled.View`
  width: 50%;
`

export default function Score() {
  return (
    <Container>
      <HeadingTxt>Your Score is</HeadingTxt>
      <ScoreTxt>70%</ScoreTxt>
      <GoHomeBtn>
        <Button
          title="Go to decks"
          onPress={() => navigation.navigate("DeckDetails")}
        />
      </GoHomeBtn>
    </Container>
  );
}
