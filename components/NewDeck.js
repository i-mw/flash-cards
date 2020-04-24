import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function NewDeck() {
  return (
    <View>
      <Text>What is the title of your new deck?</Text>
      <TextInput placeholder="Deck name"/>
      <Button title="Submit"/>
    </View>
  )
}