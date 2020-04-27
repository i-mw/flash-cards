import React from "react";
import { View, Text, FlatList } from "react-native";
import DeckEntry from "./DeckEntry";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

function DeckList({ deckIds, render }) {
  if (!render) {
    return <View></View>;
  }

  return (
    <FlatList
      style={{ flex: 1 }}
      data={deckIds}
      keyExtractor={item => item}
      renderItem={({ item }) => {
        return <DeckEntry key={item} deckId={item} />;
      }}
    />
  );
}

function mapStateToProps({ decks }) {
  if (decks === null || decks.length === 0) {
    return {
      render: false
    }
  }
  
  const deckIds = Object.keys(decks).sort(
    (a, b) => decks[b].timestamp - decks[a].timestamp
  );

  return {
    deckIds,
    render: true
  };
}

export default connect(mapStateToProps)(DeckList);
