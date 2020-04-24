import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function NewDeck({navigation}) {

  return (
    <View>
      <Text>What is the title of your new deck?</Text>
      <TextInput placeholder="Deck name"/>
      <Button title="Submit" onPress={() => navigation.navigate('DeckDetails')}/>
    </View>
  )
}