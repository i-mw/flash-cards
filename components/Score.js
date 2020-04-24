import React from "react";
import { View, Text, Button } from "react-native";
import Styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

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
  margin-bottom: 15px;
`;
const ScoreTxt = Styled.Text`
  text-align: center;
  font-size: 96px;
  margin-bottom: 50px;
`;
const GoHomeBtn = Styled.View`
  width: 50%;
`;

export default function Score() {
  const navigation = useNavigation();

  return (
    <Container>
      <HeadingTxt>Your Score is</HeadingTxt>
      <ScoreTxt>70%</ScoreTxt>
      <GoHomeBtn>
        <Button
          title="Go to decks"
          onPress={() => navigation.navigate("Home", { scree: "DeckList" })}
        />
      </GoHomeBtn>
    </Container>
  );
}
