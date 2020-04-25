import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  padding-top: 50px;
`;

const Heading = Styled.Text`
  font-size: 40px;
  text-align: center;
`;

const Input = Styled.TextInput`
  margin-top: 70px;
  border: 1px solid gray;
  padding: 10px;
  font-size: 17.6px;
  width: 100%;
`;

const SubmitBtn = Styled.View`
  margin-top: 50px;
  width: 40%;
`;

export default function NewDeck({ navigation }) {
  return (
    <Container>
      <Heading>What is the title of your new deck?</Heading>
      <Input placeholder="Enter Deck Name" />
      <SubmitBtn>
        <Button
          disabled={false}
          title="Submit"
          onPress={() => navigation.navigate("DeckDetails")}
        />
      </SubmitBtn>
    </Container>
  );
}
