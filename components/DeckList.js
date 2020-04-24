import React from "react";
import { View, Text, FlatList } from "react-native";
import DeckEntry from "./DeckEntry";
import { createStackNavigator } from "@react-navigation/stack";

export default function DeckList(props) {
  console.log(props);
  const Data = [0, 1, 2, 3, 4, 5, 6, 7];

  return <FlatList data={Data} renderItem={({ item }) => <DeckEntry navigation={props.navigation} key={item}/>} />;
}
