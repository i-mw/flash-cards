import React from "react";
import { View, Text, FlatList } from "react-native";
import DeckEntry from "./DeckEntry";

export default function DeckList() {
  const Data = [0, 1, 2, 3, 4, 5, 6, 7];
  return <FlatList data={Data} renderItem={({ item }) => <DeckEntry key={item}/>} />;
}
