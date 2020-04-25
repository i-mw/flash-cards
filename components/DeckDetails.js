import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import {} from "react-native-gesture-handler";
import Styled from "styled-components/native";

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

export default function DeckDetails({ navigation }) {
  return (
    <Container>
      <HeadingWrapper>
        <Heading>A deck title</Heading>
        <SubHeading>3 cards</SubHeading>
      </HeadingWrapper>

      <BtnWrapper>
        <AddCardBtn>
          <Button
            color="gray"
            title="Add Card"
            onPress={() => navigation.navigate("NewCard")}
          />
        </AddCardBtn>
        <StartQuizBtn>
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate("Quiz")}
          />
        </StartQuizBtn>
        {/* <StartQuizBtn>
          <Button
            title="Start Quiz"
            onPress={() => navigation.navigate("EmptyDeckQuiz")}
          />
        </StartQuizBtn> */}
        <DeleteDeckBtn onPress={() => navigation.navigate("Home")}>
          <DeleteBtnTxt>Delete Deck</DeleteBtnTxt>
        </DeleteDeckBtn>
      </BtnWrapper>
    </Container>
  );
}
