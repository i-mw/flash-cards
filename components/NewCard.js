import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
  flex: 1;
  padding: 30px;
  padding-top: 50px;
  align-items: center;
`;
const Input = Styled.TextInput`
  margin-bottom: 25px;
  border: 1px solid gray
  padding: 10px;
  font-size: 17.6px;
`;
const SubmitBtn = Styled.View`
  margin-top: 15px;
  width: 40%;
`;

export default function NewCard({ navigation }) {
  return (
    <Container>
      <Input placeholder="Enter the question" />
      <Input placeholder="Enter the answer" />
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
