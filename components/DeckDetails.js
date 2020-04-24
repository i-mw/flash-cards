import React from 'react'
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native'

export default function DeckDetails({navigation}) {
  return (
    <View>
      <Text>Udacicards</Text>
      <Text>3 cards</Text>
      <View>
        <Button title="Add Card" onPress={() => navigation.navigate('NewCard')}/>
        <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')}/>
        <Button title="Start Quiz" onPress={() => navigation.navigate('EmptyDeckQuiz')}/>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Text>Delete Deck</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}