import React from "react";
import { View, Text } from "react-native";
import Styled from 'styled-components/native'

const Container = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
`
const Txt = Styled.Text`
  text-align: center;
  font-size: 19.2px;
`

export default function EmptyDeckQuiz() {
  return (
    <Container>
      <Txt>You can't start a quiz.</Txt>
      <Txt>There're no cards in this deck.</Txt>
    </Container>
  );
}
