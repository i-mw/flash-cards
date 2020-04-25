import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Styled from "styled-components/native";

const Container = Styled.KeyboardAvoidingView`
  flex: 1;
`;

const InnerContainer = Styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
`

const Heading = Styled.Text`
  font-size: 40px;
  text-align: center;
`;

const Input = Styled.TextInput`
  border: 1px solid gray;
  padding: 10px;
  font-size: 17.6px;
  width: 100%;
`;

const SubmitBtn = Styled.View`
  width: 40%;
`;

export default function NewDeck({ navigation }) {
  return (
    <Container behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
        <InnerContainer>
          <Heading>What is the title of your new deck?</Heading>
          <Input placeholder="Enter Deck Name" />
          <SubmitBtn>
            <Button
              disabled={false}
              title="Submit"
              onPress={() => navigation.navigate("DeckDetails")}
            />
          </SubmitBtn>
        </InnerContainer>
      </TouchableWithoutFeedback>
    </Container>
  );
}
