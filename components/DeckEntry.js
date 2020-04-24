import React from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Styled from "styled-components/native";

const Container = Styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 150px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const Heading = Styled.Text`
  font-size: 19.2px;
  margin-bottom: 10px;
`;

const SubHeading = Styled.Text`
  font-size: 12.8px;
  color: gray;
`;

export default function DeckEntry(props) {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate("DeckDetails")}>
      <Heading>A deck title</Heading>
      <SubHeading>3 cards</SubHeading>
    </Container>
  );
}
