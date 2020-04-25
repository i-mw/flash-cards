import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Styled from "styled-components/native";

const Container = Styled.View`
  flex: 1;
`;
const InnerContainer = Styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-right: 30px;
  padding-left: 30px;
`;
const Input = Styled.TextInput`
  margin-top: 40px;
  border: 1px solid #abb0ac;
  padding: 10px;
  font-size: 17.6px;
  width: 100%;
`;
const SubmitBtn = Styled.View`
  margin-top: 70px;
  width: 40%;
`;

export default class NewCard extends React.Component {
  state = {
    question: "",
    answer: "",
  };

  render() {
    const { navigation } = this.props;
    const { question, answer } = this.state;

    return (
      <Container behavior="padding">
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          touchSoundDisabled={true}
        >
          <InnerContainer>
            <Input
              placeholder="Enter the question"
              value={question}
              onChangeText={(question) => this.setState({ question })}
            />
            <Input
              placeholder="Enter the answer"
              value={answer}
              onChangeText={(answer) => this.setState({ answer })}
            />
            <SubmitBtn>
              <Button
                disabled={question === '' || answer === ''}
                title="Submit"
                onPress={() => navigation.navigate("DeckDetails")}
              />
            </SubmitBtn>
          </InnerContainer>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}
