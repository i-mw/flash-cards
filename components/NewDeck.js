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
  font-size: 2.5em;
  text-align: center;
`;

const Input = Styled.TextInput`
  margin-top: 70px;
  border: 1px solid gray
  padding: 10px;
  font-size: 1.1em;
`;

const SubmitBtn = Styled.View`
  margin-top: 30px;
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