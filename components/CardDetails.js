import React from 'react'
import { View, Text, Button, TouchableWithoutFeedback } from "react-native";

export default function CardDetails() {
  return (
    <View>
      <View>
        <Text>Does React Native work with Android?</Text>
        <TouchableWithoutFeedback>
          <Text>Answer</Text>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <Button title="Correct"/>
        <Button title="Incorrect"/>
      </View>
    </View>
  )
}