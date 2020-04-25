import React from "react";
import { View, Text, FlatList } from "react-native";
import DeckEntry from "./DeckEntry";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

function DeckList({ deckIds }) {
  if (deckIds.length === 0) {
    return <View></View>;
  }
  
  return (
    <FlatList
      style={{ flex: 1 }}
      data={deckIds}
      renderItem={({item}) => {
        return <DeckEntry key={item} deckId={item} />;
      }}
    />
  );
}

function mapStateToProps({ decks }) {
  return {
    deckIds: Object.keys(decks),
  };
}

export default connect(mapStateToProps)(DeckList);
