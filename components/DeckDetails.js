import React from 'react'
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native'

export default function DeckDetails() {
  return (
    <View>
      <Text>Udacicards</Text>
      <Text>3 cards</Text>
      <View>
        <Button title="Add Card"/>
        <Button title="Start Quiz"/>
        <TouchableWithoutFeedback>
          <Text>Delete Deck</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}