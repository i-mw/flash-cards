import React from "react";
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";
import Styled from "styled-components/native";

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
  margin-bottom: 12px;
`;
const IncorrectBtn = Styled.View`
`;

export default function CardDetails() {
  return (
    <Container>
      <QAWrapper>
        <QATxt>Does React Native work with Android?</QATxt>
        <QABtn>
          <QABtnTxt>Answer</QABtnTxt>
        </QABtn>
      </QAWrapper>

      <BtnWrapper>
        <CorrectBtn>
          <Button color="#008009" title="Correct" />
        </CorrectBtn>
        <IncorrectBtn>
          <Button color="#fa8c05" title="Incorrect" />
        </IncorrectBtn>
      </BtnWrapper>
    </Container>
  );
}
