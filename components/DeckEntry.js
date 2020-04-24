import React from "react";
import { View, Text, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native'

export default function DeckEntry(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DeckDetails')}>
      <View>
        <Text>A deck title</Text>
        <Text>3 cards</Text>
      </View>
    </TouchableOpacity>
  );
}
