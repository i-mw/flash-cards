import React from 'react'
import { View, Text } from "react-native";
import CardDetails from './CardDetails'
import Score from './Score'
import Styled from 'styled-components/native'

const Container = Styled.View`
  flex: 1
  padding: 15px;
`
const Txt = Styled.Text`
  font-size: 17.6px;
`

export default function Quiz() {
  return (
    <Container>
      <Txt>2/2</Txt>
      <CardDetails/>
      {/* <Score/> */}
    </Container>
  )
}