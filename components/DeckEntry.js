import React from "react";
import { View, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";

export default function DeckEntry(props) {
  return (
    <TouchableOpacity>
      <View>
        <Text>A deck title</Text>
        <Text>3 cards</Text>
      </View>
    </TouchableOpacity>
  );
}
