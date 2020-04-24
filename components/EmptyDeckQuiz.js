import React from "react";
import { View, Text } from "react-native";

export default function EmptyDeckQuiz() {
  return (
    <View>
      <Text>You can't start a quiz.</Text>
      <Text>there're no cards in the deck.</Text>
    </View>
  );
}
