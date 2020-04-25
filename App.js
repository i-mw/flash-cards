import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./components/DeckList";
import NewDeck from "./components/NewDeck";
import DeckDetails from "./components/DeckDetails";
import NewCard from "./components/NewCard";
import Quiz from "./components/Quiz";
import EmptyDeckQuiz from "./components/EmptyDeckQuiz";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { handleInitialData } from "./actions/decks";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="DeckList">
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{ title: "DECKS" }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{ title: "NEW DECK" }}
      />
    </Tab.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DeckDetails" component={DeckDetails} />
          <Stack.Screen
            name="NewCard"
            component={NewCard}
            options={{ title: "Add Card" }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ title: "Quiz" }}
          />
          <Stack.Screen
            name="EmptyDeckQuiz"
            component={EmptyDeckQuiz}
            options={{ title: "Quiz" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

const ConnectedApp = connect(null, mapDispatchToProps)(App)

export default function Index() {
  return (
    <Provider store={createStore(reducer, middleware)}>
      <ConnectedApp />
    </Provider>
  );
}
