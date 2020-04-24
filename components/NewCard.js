import React from 'react'
import { View, Text, TextInput, Button } from "react-native";

export default function NewCard() {
  return (
    <View>
      <TextInput placeholder="Enter the question"/>
      <TextInput placeholder="Enter the answer"/>
      <Button title="Submit"/>
    </View>
  )
}